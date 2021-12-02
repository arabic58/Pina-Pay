// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
"use strict";

((window) => {
  const core = window.Deno.core;
  const { errors } = window.__bootstrap.errors;

  class FsWatcher {
    #rid = 0;

    constructor(paths, options) {
      const { recursive } = options;
      this.#rid = core.opSync("op_fs_events_open", { recursive, paths });
    }

    get rid() {
      return this.#rid;
    }

    async next() {
      try {
        const value = await core.opAsync("op_fs_events_poll", this.rid);
        return value
          ? { value, done: false }
          : { value: undefined, done: true };
      } catch (error) {
        if (error instanceof errors.BadResource) {
          return { value: undefined, done: true };
        } else if (error instanceof errors.Interrupted) {
          return { value: undefined, done: true };
        }
        throw error;
      }
    }

    // TODO(kt3k): This is deprecated. Will be removed in v2.0.
    // See https://github.com/denoland/deno/issues/10577 for details
    return(value) {
      core.close(this.rid);
      return Promise.resolve({ value, done: true });
    }

    close() {
      core.close(this.rid);
    }

    [Symbol.asyncIterator]() {
      return this;
    }
  }

  function watchFs(
    paths,
    options = { recursive: true },
  ) {
    return new FsWatcher(Array.isArray(paths) ? paths : [paths], options);
  }

  window.__bootstrap.fsEvents = {
    watchFs,
  };
})(this);
