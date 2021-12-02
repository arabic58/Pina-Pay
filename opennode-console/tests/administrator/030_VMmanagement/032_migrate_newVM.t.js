StartTest(function (t) {
	
	var rowsBefore = '';
	var rowsAfter = '';
	var migrateButton = '';
	var migrating = '';
	var title = '';
	var msg = '';
	var VMname = '';
	var vmid = '';
	var firstHost = '';
	var secondHost = '';
	var firstHostname = '';
	var secondHostname = '';
	
	t.diag("Use Case: Migrate selected VM");
	
	t.chain(
   		
			// Wait while login screen or main page of onc will start
			function(next){
				t.chain(
						{
							waitFor : 1000
						},
						next
				);
			},
			function(next){
				// Login to onc or verify if correct user is logged in
				var goon = verifyIfUserIsLoggedIn(t,"admin");
				if (goon == true){
					t.chain(
					   		
						{
							waitFor : 5000
						},

						// Read 2 hostnames for migration and click first hostname
						function(next){
							firstHost = Ext.get(Ext.ComponentQuery.query("#search-results")).item(0).dom.el.dom.firstElementChild;
							secondHost = Ext.get(Ext.ComponentQuery.query("#search-results")).item(0).dom.el.dom.firstElementChild.nextElementSibling;
							firstHostname = firstHost.textContent.trim().split(" ")[0];
							secondHostname = secondHost.textContent.trim().split(" ")[0];
							console.log(firstHostname);
							console.log(secondHostname);
							t.diag("Select first hostname");
							t.click(firstHost);
							next();
						},
						
						function(next){
							// Select VMs tab
							t.diag("Select VMs tab");
							clickEl(t,"span:contains('VMs')", next);
						},

						function(next){
							// Wait for table
							waitForEl(t,'.x-grid-table');
							next();
						},
						
						function(next){
							// Count table rows without header
							rowsBefore = countRows('.x-grid-table');
							t.diag('VM list has ' + rowsBefore + ' VMs.');
							next();
						},
						
						function(next){
							// Press New VM button
							t.diag("Press New button");
							clickEl(t,"span:contains('New')", next);
						},
						
						function(next){
							// Expand Template input field
							clickEl(t,"#template-inputEl", next);
						},
						
						function(next){
							// Select template
							t.diag("Select template");
							t.type("#template-inputEl",'[DOWN]');
							t.type("#template-inputEl",'[ENTER]',next);
						},
						
						function(next){
							// Select hostname input field and enter new VM hostname
							t.diag("Enter New VM hostname");
							t.selectText("#hostname-inputEl");
							t.type("#hostname-inputEl","VMForMigration",next);
						},
						
						function(next){
							// Select hostname input field and enter new VM hostname
							t.diag("Enter New VM root password");
							t.selectText("#root_password-inputEl");
							t.type("#root_password-inputEl","passwd",next);
						},
						
						function(next){
							// Select hostname input field and enter new VM hostname
							t.diag("Repeat New VM root password");
							t.selectText("#root_password_repeat-inputEl");
							t.type("#root_password_repeat-inputEl","passwd",next);
						},
						
						function(next){
							// Press 'Create' button
							t.diag("Press 'Create' button");
							clickEl(t,'span:contains("Create")', next);
						},
						
						function(next){
							// Wait while VM will be created
							t.chain(
									{
										waitFor : 15000
									},
									next
							);
						},
						
						function(next){
							// Count table rows without header
							rowsAfter =  countRows('.x-grid-table');
							t.diag('VM list now has ' + rowsAfter + ' before had ' + rowsBefore + ' VMs.');
							
							t.is(rowsAfter,rowsBefore+1,"New VM is created");
							if (rowsAfter==rowsBefore+1){
								t.chain(
										function(next){
											// Select name and id of VM for migration
											var lastRow = document.querySelector('.x-grid-table').getElementsByTagName("tr").length;
											VMname = document.querySelector('tr:nth-child(' + lastRow + ')>td:nth-child(2)>div').innerHTML;
											vmid = document.querySelector('tr:nth-child(' + lastRow + ')>td:nth-child(8)>div').innerHTML;
											t.diag("Selected VM for migration - "+ VMname);
											console.log(VMname);
											console.log(vmid);
											next();
										},
										
										function(next){

											// Open VM Map
											var vmMapTabItem = Ext.get(Ext.ComponentQuery.query("#vmmap")).item(1);
											t.click(vmMapTabItem.dom.tab.el);
											t.diag('Open VM map window');
											
											// Press migrate button
											migrateButton = Ext.get(Ext.ComponentQuery.query("#migrate")).item(0);
											t.click(migrateButton.dom.el);
											t.diag('Press migrate button');

											next();
											
										},
										
										{
											waitFor : 5000
										},
										
										function(next){
											// Identify VM for migration in VMmap
											var source = Ext.get('vmmap-'+ vmid);
											console.log(source);
											var vmmap=Ext.get(Ext.ComponentQuery.query('gridview')).item(0).dom.all.elements;
											// Identify place in the VMmap table where to migrate VM
											var targetname = secondHost.textContent.trim().split(" ")[0];
											var target = null;
											for (var i = 0; i < vmmap.length; i++) {
												if (Ext.get(vmmap).item(i).dom.cells.item(0).textContent == targetname) {
													target = Ext.get(vmmap).item(i).dom.cells.item(1);
													break;
												}
												
											}
											console.log(targetname);
											console.log(target);
											t.diag(VMname +' will be migrated to '+ targetname);
										    
											// Drag and drop VM from source to target
											t.chain(
										        {
										            action      : 'drag',
										            source      : source,
										            to          : target
										        },
										        
										        // Press "Yes" in the confirmation message
										        function(next){
										        	title = Ext.get(Ext.ComponentQuery.query('#messagebox-1001')).item(0).dom.title;
										        	if (title=="Confirm"){
										        		t.click('button span:contains("Yes")');
										        		t.diag('Confirm migration');
										        	} 
										        	 next();
										        },
										        
										        // Verify if migrating in progress
										        function(next){
										        	migrating = document.querySelector('.x-mask-loading');
										        	if (migrating!=null){
										        		t.diag('Migrating ....');
										        		// WaitFor migration process ended
										        		//t.waitForElementNotVisible(migrating);
										        	}
										        	next();
										        },
										        
												function(next){
													t.chain(
													    	{
													    		waitFor: 'waitForElementNotVisible',
													    		args : migrating
													    	},
													    	{
													    		waitFor: 'waitForElementVisible',
													    		args : '#messagebox-1001'
													    	},
												        
													    	// Verify if migrating progress ended successfully
															function(next){
													    		title = Ext.get(Ext.ComponentQuery.query('#messagebox-1001')).item(0).dom.title;
													    		msg = Ext.get(Ext.ComponentQuery.query('#messagebox-1001')).item(0).dom.msg.value;
																					
																if (title=='Migration succeeded'){
																	t.pass('Message title: '+ title);
																	t.pass('Message text: '+ msg);
																	t.click('button span:contains("OK")');
																} else {
																	if (title!='Migration succeeded') {
																		t.fail('Message title: '+ title);
																		t.fail('Message text: '+ msg);
																		t.click('button span:contains("OK")');
																	}
																}
																next();
															},
																				
															function(next){
															   	t.click(migrateButton.dom.el);
															}
													);
													next();
												}
										        
										    );
										    next();
										}	
								);
							} else {
								t.diag('VM is not created.');
							}
							next();
						}



				       );
				}
				next();
			}

    );
	
});