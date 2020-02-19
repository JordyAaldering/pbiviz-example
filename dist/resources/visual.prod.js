var pbivizExample21D841A3C9DD4BD1A74D00F270DCFEC5 =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 346);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return beaches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return circles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return edges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Diagram; });
/* harmony import */ var _Beach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _RedBlackTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);





var epsilon = 1e-6;
var epsilon2 = 1e-12;
var beaches;
var cells;
var circles;
var edges;

function triangleArea(a, b, c) {
  return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
}

function lexicographic(a, b) {
  return b[1] - a[1] || b[0] - a[0];
}

function Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(),
      x,
      y,
      circle;
  edges = [];
  cells = new Array(sites.length);
  beaches = new _RedBlackTree__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"]();
  circles = new _RedBlackTree__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"]();

  while (true) {
    circle = _Circle__WEBPACK_IMPORTED_MODULE_2__[/* firstCircle */ "c"];

    if (site && (!circle || site[1] < circle.y || site[1] === circle.y && site[0] < circle.x)) {
      if (site[0] !== x || site[1] !== y) {
        Object(_Beach__WEBPACK_IMPORTED_MODULE_0__[/* addBeach */ "a"])(site);
        x = site[0], y = site[1];
      }

      site = sites.pop();
    } else if (circle) {
      Object(_Beach__WEBPACK_IMPORTED_MODULE_0__[/* removeBeach */ "b"])(circle.arc);
    } else {
      break;
    }
  }

  Object(_Cell__WEBPACK_IMPORTED_MODULE_1__[/* sortCellHalfedges */ "d"])();

  if (extent) {
    var x0 = +extent[0][0],
        y0 = +extent[0][1],
        x1 = +extent[1][0],
        y1 = +extent[1][1];
    Object(_Edge__WEBPACK_IMPORTED_MODULE_3__[/* clipEdges */ "a"])(x0, y0, x1, y1);
    Object(_Cell__WEBPACK_IMPORTED_MODULE_1__[/* clipCells */ "b"])(x0, y0, x1, y1);
  }

  this.edges = edges;
  this.cells = cells;
  beaches = circles = edges = cells = null;
}
Diagram.prototype = {
  constructor: Diagram,
  polygons: function polygons() {
    var edges = this.edges;
    return this.cells.map(function (cell) {
      var polygon = cell.halfedges.map(function (i) {
        return Object(_Cell__WEBPACK_IMPORTED_MODULE_1__[/* cellHalfedgeStart */ "a"])(cell, edges[i]);
      });
      polygon.data = cell.site.data;
      return polygon;
    });
  },
  triangles: function triangles() {
    var triangles = [],
        edges = this.edges;
    this.cells.forEach(function (cell, i) {
      if (!(m = (halfedges = cell.halfedges).length)) return;
      var site = cell.site,
          halfedges,
          j = -1,
          m,
          s0,
          e1 = edges[halfedges[m - 1]],
          s1 = e1.left === site ? e1.right : e1.left;

      while (++j < m) {
        s0 = s1;
        e1 = edges[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;

        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });
    return triangles;
  },
  links: function links() {
    return this.edges.filter(function (edge) {
      return edge.right;
    }).map(function (edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },
  find: function find(x, y, radius) {
    var that = this,
        i0,
        i1 = that._found || 0,
        n = that.cells.length,
        cell; // Use the previously-found cell, or start with an arbitrary one.

    while (!(cell = that.cells[i1])) {
      if (++i1 >= n) return null;
    }

    var dx = x - cell.site[0],
        dy = y - cell.site[1],
        d2 = dx * dx + dy * dy; // Traverse the half-edges to find a closer cell, if any.

    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function (e) {
        var edge = that.edges[e],
            v = edge.left;
        if ((v === cell.site || !v) && !(v = edge.right)) return;
        var vx = x - v[0],
            vy = y - v[1],
            v2 = vx * vx + vy * vy;
        if (v2 < d2) d2 = v2, i1 = v.index;
      });
    } while (i1 !== null);

    that._found = i0;
    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return customEvent; });
var filterEvents = {};
var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;

  if (!("onmouseenter" in element)) {
    filterEvents = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    };
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function (event) {
    var related = event.relatedTarget;

    if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function (event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).

    event = event1;

    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {
      type: t,
      name: name
    };
  });
}

function onRemove(typename) {
  return function () {
    var on = this.__on;
    if (!on) return;

    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }

    if (++i) on.length = i;else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function (d, i, group) {
    var on = this.__on,
        o,
        listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {
      type: typename.type,
      name: typename.name,
      value: value,
      listener: listener,
      capture: capture
    };
    if (!on) this.__on = [o];else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["b"] = (function (typename, value, capture) {
  var typenames = parseTypenames(typename + ""),
      i,
      n = typenames.length,
      t;

  if (arguments.length < 2) {
    var on = this.node().__on;

    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;

  for (i = 0; i < n; ++i) {
    this.each(on(typenames[i], value, capture));
  }

  return this;
});
function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;

  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ascending__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _bisector__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(156);
/* harmony import */ var _descending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(157);
/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91);
/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _extent__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(158);
/* harmony import */ var _threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(159);
/* harmony import */ var _threshold_scott__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(160);
/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _threshold_sturges__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(161);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _max__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(162);
/* harmony import */ var _median__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(163);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(164);
/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96);
/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90);
/* harmony import */ var _permute__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(165);
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _quantile__WEBPACK_IMPORTED_MODULE_18__["a"]; });

/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(94);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _range__WEBPACK_IMPORTED_MODULE_19__["a"]; });

/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(166);
/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(167);
/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(168);
/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["c"]; });

/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(97);
/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(92);
/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(169);




























/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CREATED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SCHEDULED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STARTING; });
/* unused harmony export STARTED */
/* unused harmony export RUNNING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return get; });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(293);


var emptyOn = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
/* harmony default export */ __webpack_exports__["e"] = (function (node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index,
    // For context during callback.
    group: group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});
function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}
function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween; // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!

  schedules[id] = self;
  self.timer = Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__[/* timer */ "c"])(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time); // If the elapsed delay is less than our first sleep, start immediately.

    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o; // If the state is not SCHEDULED, then we previously errored on start.

    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue; // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!

      if (o.state === STARTED) return Object(d3_timer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(start); // Interrupt the active transition, if any.

      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } // Cancel any pre-empted transitions.
      else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
    } // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.


    Object(d3_timer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function () {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    }); // Dispatch the start event.
    // Note this must be done before the tween are initialized.

    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted

    self.state = STARTED; // Initialize the tween, deleting null tween.

    tween = new Array(n = self.tween.length);

    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }

    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    } // Dispatch the end event.


    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];

    for (var i in schedules) {
      return;
    } // eslint-disable-line no-unused-vars


    delete node.__transition;
  }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initInterpolator; });
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;

    case 1:
      this.range(domain);
      break;

    default:
      this.range(range).domain(domain);
      break;
  }

  return this;
}
function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;

    case 1:
      this.interpolator(domain);
      break;

    default:
      this.interpolator(interpolator).domain(domain);
      break;
  }

  return this;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return newInterval; });
var t0 = new Date(),
    t1 = new Date();
function newInterval(floori, offseti, count, field) {
  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date() : new Date(+date)), date;
  }

  interval.floor = function (date) {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = function (date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function (date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function (date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function (start, stop, step) {
    var range = [],
        previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date

    do {
      range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    } while (previous < start && start < stop);

    return range;
  };

  interval.filter = function (test) {
    return newInterval(function (date) {
      if (date >= date) while (floori(date), !test(date)) {
        date.setTime(date - 1);
      }
    }, function (date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty

        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty

        }
      }
    });
  };

  if (count) {
    interval.count = function (start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function (step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function (d) {
        return field(d) % step === 0;
      } : function (d) {
        return interval.count(0, d) % step === 0;
      });
    };
  }

  return interval;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return transformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return continuous; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(353);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(286);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77);





var unit = [0, 1];
function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= a = +a) ? function (x) {
    return (x - a) / b;
  } : Object(_constant__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(isNaN(b) ? NaN : 0.5);
}

function clamper(domain) {
  var a = domain[0],
      b = domain[domain.length - 1],
      t;
  if (a > b) t = a, a = b, b = t;
  return function (x) {
    return Math.max(a, Math.min(b, x));
  };
} // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].


function bimap(domain, range, interpolate) {
  var d0 = domain[0],
      d1 = domain[1],
      r0 = range[0],
      r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function (x) {
    return r0(d0(x));
  };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1; // Reverse descending domains.

  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function (x) {
    var i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* bisect */ "b"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function (y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3_interpolate__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])))(y)));
  };

  scale.domain = function (_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_4__[/* map */ "a"].call(_, _number__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]), clamp === identity || (clamp = clamper(domain)), rescale()) : domain.slice();
  };

  scale.range = function (_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_4__[/* slice */ "b"].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function (_) {
    return range = _array__WEBPACK_IMPORTED_MODULE_4__[/* slice */ "b"].call(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], rescale();
  };

  scale.clamp = function (_) {
    return arguments.length ? (clamp = _ ? clamper(domain) : identity, scale) : clamp !== identity;
  };

  scale.interpolate = function (_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function (t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous(transform, untransform) {
  return transformer()(transform, untransform);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Selection; });
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(234);
/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(235);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(236);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(237);
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
/* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(239);
/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(240);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(241);
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(242);
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(243);
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(244);
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(245);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(246);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(247);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(248);
/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(249);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(250);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31);
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(251);
/* harmony import */ var _classed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(252);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(253);
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(254);
/* harmony import */ var _raise__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(255);
/* harmony import */ var _lower__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(256);
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(257);
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(258);
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(259);
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(260);
/* harmony import */ var _datum__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(261);
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(1);
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(262);































var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  selectAll: _selectAll__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  filter: _filter__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  data: _data__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
  enter: _enter__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"],
  exit: _exit__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
  join: _join__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
  merge: _merge__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
  order: _order__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
  sort: _sort__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
  call: _call__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
  nodes: _nodes__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
  node: _node__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"],
  size: _size__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"],
  empty: _empty__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"],
  each: _each__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"],
  attr: _attr__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"],
  style: _style__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"],
  property: _property__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"],
  classed: _classed__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"],
  text: _text__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"],
  html: _html__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"],
  raise: _raise__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"],
  lower: _lower__WEBPACK_IMPORTED_MODULE_23__[/* default */ "a"],
  append: _append__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"],
  insert: _insert__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"],
  remove: _remove__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"],
  clone: _clone__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"],
  datum: _datum__WEBPACK_IMPORTED_MODULE_28__[/* default */ "a"],
  on: _on__WEBPACK_IMPORTED_MODULE_29__[/* default */ "b"],
  dispatch: _dispatch__WEBPACK_IMPORTED_MODULE_30__[/* default */ "a"]
};
/* harmony default export */ __webpack_exports__["b"] = (selection);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transition; });
/* unused harmony export default */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return newId; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(221);
/* harmony import */ var _attrTween_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(223);
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(224);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(225);
/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(226);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(227);
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(228);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(229);
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(230);
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(231);
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(232);
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(233);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(263);
/* harmony import */ var _styleTween_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(264);
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(265);
/* harmony import */ var _textTween_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(266);
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(267);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(34);
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(268);




















var id = 0;
function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}
function transition(name) {
  return Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select_js__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
  selection: _selection_js__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"],
  transition: _transition_js__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  attrTween: _attrTween_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  style: _style_js__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"],
  styleTween: _styleTween_js__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"],
  text: _text_js__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"],
  textTween: _textTween_js__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"],
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
  tween: _tween_js__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"],
  delay: _delay_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
  duration: _duration_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
  ease: _ease_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
  end: _end_js__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"]
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
var array = Array.prototype;
var map = array.map;
var slice = array.slice;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _select__WEBPACK_IMPORTED_MODULE_0__["a"]; });




















/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createBorderEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setEdgeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clipEdges; });
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

function createEdge(left, right, v0, v1) {
  var edge = [null, null],
      index = _Diagram__WEBPACK_IMPORTED_MODULE_0__[/* edges */ "e"].push(edge) - 1;
  edge.left = left;
  edge.right = right;
  if (v0) setEdgeEnd(edge, left, right, v0);
  if (v1) setEdgeEnd(edge, right, left, v1);
  _Diagram__WEBPACK_IMPORTED_MODULE_0__[/* cells */ "b"][left.index].halfedges.push(index);
  _Diagram__WEBPACK_IMPORTED_MODULE_0__[/* cells */ "b"][right.index].halfedges.push(index);
  return edge;
}
function createBorderEdge(left, v0, v1) {
  var edge = [v0, v1];
  edge.left = left;
  return edge;
}
function setEdgeEnd(edge, left, right, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left;
    edge.right = right;
  } else if (edge.left === right) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
} // Liang–Barsky line clipping.

function clipEdge(edge, x0, y0, x1, y1) {
  var a = edge[0],
      b = edge[1],
      ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;
  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;

  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;

  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;

  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;

  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?

  if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
  if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
  return true;
}

function connectEdge(edge, x0, y0, x1, y1) {
  var v1 = edge[1];
  if (v1) return true;
  var v0 = edge[0],
      left = edge.left,
      right = edge.right,
      lx = left[0],
      ly = left[1],
      rx = right[0],
      ry = right[1],
      fx = (lx + rx) / 2,
      fy = (ly + ry) / 2,
      fm,
      fb;

  if (ry === ly) {
    if (fx < x0 || fx >= x1) return;

    if (lx > rx) {
      if (!v0) v0 = [fx, y0];else if (v0[1] >= y1) return;
      v1 = [fx, y1];
    } else {
      if (!v0) v0 = [fx, y1];else if (v0[1] < y0) return;
      v1 = [fx, y0];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;

    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0) v0 = [(y0 - fb) / fm, y0];else if (v0[1] >= y1) return;
        v1 = [(y1 - fb) / fm, y1];
      } else {
        if (!v0) v0 = [(y1 - fb) / fm, y1];else if (v0[1] < y0) return;
        v1 = [(y0 - fb) / fm, y0];
      }
    } else {
      if (ly < ry) {
        if (!v0) v0 = [x0, fm * x0 + fb];else if (v0[0] >= x1) return;
        v1 = [x1, fm * x1 + fb];
      } else {
        if (!v0) v0 = [x1, fm * x1 + fb];else if (v0[0] < x0) return;
        v1 = [x0, fm * x0 + fb];
      }
    }
  }

  edge[0] = v0;
  edge[1] = v1;
  return true;
}

function clipEdges(x0, y0, x1, y1) {
  var i = _Diagram__WEBPACK_IMPORTED_MODULE_0__[/* edges */ "e"].length,
      edge;

  while (i--) {
    if (!connectEdge(edge = _Diagram__WEBPACK_IMPORTED_MODULE_0__[/* edges */ "e"][i], x0, y0, x1, y1) || !clipEdge(edge, x0, y0, x1, y1) || !(Math.abs(edge[0][0] - edge[1][0]) > _Diagram__WEBPACK_IMPORTED_MODULE_0__[/* epsilon */ "f"] || Math.abs(edge[0][1] - edge[1][1]) > _Diagram__WEBPACK_IMPORTED_MODULE_0__[/* epsilon */ "f"])) {
      delete _Diagram__WEBPACK_IMPORTED_MODULE_0__[/* edges */ "e"][i];
    }
  }
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return firstCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detachCircle; });
/* harmony import */ var _RedBlackTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


var circlePool = [];
var firstCircle;

function Circle() {
  Object(_RedBlackTree__WEBPACK_IMPORTED_MODULE_0__[/* RedBlackNode */ "a"])(this);
  this.x = this.y = this.arc = this.site = this.cy = null;
}

function attachCircle(arc) {
  var lArc = arc.P,
      rArc = arc.N;
  if (!lArc || !rArc) return;
  var lSite = lArc.site,
      cSite = arc.site,
      rSite = rArc.site;
  if (lSite === rSite) return;
  var bx = cSite[0],
      by = cSite[1],
      ax = lSite[0] - bx,
      ay = lSite[1] - by,
      cx = rSite[0] - bx,
      cy = rSite[1] - by;
  var d = 2 * (ax * cy - ay * cx);
  if (d >= -_Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon2 */ "g"]) return;
  var ha = ax * ax + ay * ay,
      hc = cx * cx + cy * cy,
      x = (cy * ha - ay * hc) / d,
      y = (ax * hc - cx * ha) / d;
  var circle = circlePool.pop() || new Circle();
  circle.arc = arc;
  circle.site = cSite;
  circle.x = x + bx;
  circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

  arc.circle = circle;
  var before = null,
      node = _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* circles */ "c"]._;

  while (node) {
    if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
      if (node.L) node = node.L;else {
        before = node.P;
        break;
      }
    } else {
      if (node.R) node = node.R;else {
        before = node;
        break;
      }
    }
  }

  _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* circles */ "c"].insert(before, circle);
  if (!before) firstCircle = circle;
}
function detachCircle(arc) {
  var circle = arc.circle;

  if (circle) {
    if (!circle.P) firstCircle = circle.N;
    _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* circles */ "c"].remove(circle);
    circlePool.push(circle);
    Object(_RedBlackTree__WEBPACK_IMPORTED_MODULE_0__[/* RedBlackNode */ "a"])(circle);
    arc.circle = null;
  }
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(102);




function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function (count) {
    var d = domain();
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* ticks */ "k"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function (count, specifier) {
    var d = domain();
    return Object(_tickFormat__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function (count) {
    if (count == null) count = 10;
    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* tickIncrement */ "i"])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* tickIncrement */ "i"])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* tickIncrement */ "i"])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}
function linear() {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"])(_continuous__WEBPACK_IMPORTED_MODULE_1__[/* identity */ "c"], _continuous__WEBPACK_IMPORTED_MODULE_1__[/* identity */ "c"]);

  scale.copy = function () {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_1__[/* copy */ "a"])(scale, linear());
  };

  _init__WEBPACK_IMPORTED_MODULE_2__[/* initRange */ "b"].apply(scale, arguments);
  return linearish(scale);
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  return a = +a, b = +b, function (t) {
    return a * (1 - t) + b * t;
  };
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sin; });
/* unused harmony export pi */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return max; });
var cos = Math.cos;
var sin = Math.sin;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = pi * 2;
var max = Math.max;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return x === null ? NaN : +x;
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Math.random();
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

/* harmony default export */ __webpack_exports__["a"] = (function (selector) {
  return typeof selector === "string" ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__[/* Selection */ "a"]([[document.querySelector(selector)]], [document.documentElement]) : new _selection_index__WEBPACK_IMPORTED_MODULE_0__[/* Selection */ "a"]([[selector]], _selection_index__WEBPACK_IMPORTED_MODULE_0__[/* root */ "c"]);
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _dist_package_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return d3_array__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(170);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return d3_axis__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(171);
/* harmony import */ var d3_chord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(173);
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var d3_contour__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(181);
/* harmony import */ var d3_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(183);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(188);
/* harmony import */ var d3_random__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(196);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(201);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return d3_scale__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return d3_selection__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(208);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_12__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_12__["b"]; });

/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29);
/* harmony import */ var d3_voronoi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(211);
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(213);

































/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return copy; });
/* unused harmony export default */
/* unused harmony export sequentialLog */
/* unused harmony export sequentialSymlog */
/* unused harmony export sequentialPow */
/* unused harmony export sequentialSqrt */
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var _symlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56);
/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41);







function transformer() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = _continuous__WEBPACK_IMPORTED_MODULE_0__[/* identity */ "c"],
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function (_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function (_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function (_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function (t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function copy(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
  var scale = Object(_linear__WEBPACK_IMPORTED_MODULE_2__[/* linearish */ "b"])(transformer()(_continuous__WEBPACK_IMPORTED_MODULE_0__[/* identity */ "c"]));

  scale.copy = function () {
    return copy(scale, sequential());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__[/* initInterpolator */ "a"].apply(scale, arguments);
}
function sequentialLog() {
  var scale = Object(_log__WEBPACK_IMPORTED_MODULE_3__[/* loggish */ "a"])(transformer()).domain([1, 10]);

  scale.copy = function () {
    return copy(scale, sequentialLog()).base(scale.base());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__[/* initInterpolator */ "a"].apply(scale, arguments);
}
function sequentialSymlog() {
  var scale = Object(_symlog__WEBPACK_IMPORTED_MODULE_4__[/* symlogish */ "a"])(transformer());

  scale.copy = function () {
    return copy(scale, sequentialSymlog()).constant(scale.constant());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__[/* initInterpolator */ "a"].apply(scale, arguments);
}
function sequentialPow() {
  var scale = Object(_pow__WEBPACK_IMPORTED_MODULE_5__[/* powish */ "a"])(transformer());

  scale.copy = function () {
    return copy(scale, sequentialPow()).exponent(scale.exponent());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__[/* initInterpolator */ "a"].apply(scale, arguments);
}
function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return (Math.random() - 0.5) * 1e-6;
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return x = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Math.abs(x)), x ? x[1] : NaN;
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(177);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _map__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(178);
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(179);
/* harmony import */ var _entries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(180);







/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(349);
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _active_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(172);
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _interrupt_js__WEBPACK_IMPORTED_MODULE_3__["a"]; });






/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return identity; });
/* unused harmony export default */
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform.prototype = {
  constructor: Transform,
  scale: function scale(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function translate(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function apply(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function applyX(x) {
    return x * this.k + this.x;
  },
  applyY: function applyY(y) {
    return y * this.k + this.y;
  },
  invert: function invert(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function invertX(x) {
    return (x - this.x) / this.k;
  },
  invertY: function invertY(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function rescaleX(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function rescaleY(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function toString() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom) {
    if (!(node = node.parentNode)) return identity;
  }

  return node.__zoom;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return styleValue; });
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);


function styleRemove(name) {
  return function () {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function () {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
});
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || Object(_window__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(node).getComputedStyle(node, null).getPropertyValue(name);
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedBlackNode; });
function RedBlackTree() {
  this._ = null; // root node
}

function RedBlackNode(node) {
  node.U = // parent node
  node.C = // color - true for red, false for black
  node.L = // left node
  node.R = // right node
  node.P = // previous node
  node.N = null; // next node
}
RedBlackTree.prototype = {
  constructor: RedBlackTree,
  insert: function insert(after, node) {
    var parent, grandpa, uncle;

    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N) after.N.P = node;
      after.N = node;

      if (after.R) {
        after = after.R;

        while (after.L) {
          after = after.L;
        }

        after.L = node;
      } else {
        after.R = node;
      }

      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }

    node.L = node.R = null;
    node.U = parent;
    node.C = true;
    after = node;

    while (parent && parent.C) {
      grandpa = parent.U;

      if (parent === grandpa.L) {
        uncle = grandpa.R;

        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }

          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;

        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }

          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }

      parent = after.U;
    }

    this._.C = false;
  },
  remove: function remove(node) {
    if (node.N) node.N.P = node.P;
    if (node.P) node.P.N = node.N;
    node.N = node.P = null;
    var parent = node.U,
        sibling,
        left = node.L,
        right = node.R,
        next,
        red;
    if (!left) next = right;else if (!right) next = left;else next = RedBlackFirst(right);

    if (parent) {
      if (parent.L === node) parent.L = next;else parent.R = next;
    } else {
      this._ = next;
    }

    if (left && right) {
      red = next.C;
      next.C = node.C;
      next.L = left;
      left.U = next;

      if (next !== right) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right;
        right.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }

    if (node) node.U = parent;
    if (red) return;

    if (node && node.C) {
      node.C = false;
      return;
    }

    do {
      if (node === this._) break;

      if (node === parent.L) {
        sibling = parent.R;

        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }

        if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }

          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;

        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }

        if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }

          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }

      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);

    if (node) node.C = false;
  }
};

function RedBlackRotateLeft(tree, node) {
  var p = node,
      q = node.R,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R) p.R.U = p;
  q.L = p;
}

function RedBlackRotateRight(tree, node) {
  var p = node,
      q = node.L,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L) p.L.U = p;
  q.R = p;
}

function RedBlackFirst(node) {
  while (node.L) {
    node = node.L;
  }

  return node;
}

/* harmony default export */ __webpack_exports__["b"] = (RedBlackTree);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nopropagation; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

function nopropagation() {
  d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* event */ "c"].stopImmediatePropagation();
}
/* harmony default export */ __webpack_exports__["a"] = (function () {
  d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* event */ "c"].preventDefault();
  d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* event */ "c"].stopImmediatePropagation();
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tweenValue; });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


function tweenRemove(id, name) {
  var tween0, tween1;
  return function () {
    var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* set */ "h"])(this, id),
        tween = schedule.tween; // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.

    if (tween !== tween0) {
      tween1 = tween0 = tween;

      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function () {
    var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* set */ "h"])(this, id),
        tween = schedule.tween; // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.

    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();

      for (var t = {
        name: name,
        value: value
      }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }

      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value) {
  var id = this._id;
  name += "";

  if (arguments.length < 2) {
    var tween = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* get */ "f"])(this.node(), id).tween;

    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }

    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});
function tweenValue(transition, name, value) {
  var id = transition._id;
  transition.each(function () {
    var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* set */ "h"])(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function (node) {
    return Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* get */ "f"])(node, id).value[name];
  };
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);

/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  var prefix = name += "",
      i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].hasOwnProperty(prefix) ? {
    space: _namespaces__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"][prefix],
    local: name
  } : name;
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";
/* harmony default export */ __webpack_exports__["a"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function has(key) {
    return prefix + key in this;
  },
  get: function get(key) {
    return this[prefix + key];
  },
  set: function set(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function remove(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function clear() {
    for (var property in this) {
      if (property[0] === prefix) delete this[property];
    }
  },
  keys: function keys() {
    var keys = [];

    for (var property in this) {
      if (property[0] === prefix) keys.push(property.slice(1));
    }

    return keys;
  },
  values: function values() {
    var values = [];

    for (var property in this) {
      if (property[0] === prefix) values.push(this[property]);
    }

    return values;
  },
  entries: function entries() {
    var entries = [];

    for (var property in this) {
      if (property[0] === prefix) entries.push({
        key: property.slice(1),
        value: this[property]
      });
    }

    return entries;
  },
  size: function size() {
    var size = 0;

    for (var property in this) {
      if (property[0] === prefix) ++size;
    }

    return size;
  },
  empty: function empty() {
    for (var property in this) {
      if (property[0] === prefix) return false;
    }

    return true;
  },
  each: function each(f) {
    for (var property in this) {
      if (property[0] === prefix) f(this[property], property.slice(1), this);
    }
  }
};

function map(object, f) {
  var map = new Map(); // Copy constructor.

  if (object instanceof Map) object.each(function (value, key) {
    map.set(key, value);
  }); // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
      var i = -1,
          n = object.length,
          o;
      if (f == null) while (++i < n) {
        map.set(i, object[i]);
      } else while (++i < n) {
        map.set(f(o = object[i], i, object), o);
      }
    } // Convert object to map.
    else if (object) for (var key in object) {
        map.set(key, object[key]);
      }
  return map;
}

/* harmony default export */ __webpack_exports__["a"] = (map);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return monday; });
/* unused harmony export tuesday */
/* unused harmony export wednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return thursday; });
/* unused harmony export friday */
/* unused harmony export saturday */
/* unused harmony export sundays */
/* unused harmony export mondays */
/* unused harmony export tuesdays */
/* unused harmony export wednesdays */
/* unused harmony export thursdays */
/* unused harmony export fridays */
/* unused harmony export saturdays */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);



function weekday(i) {
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function (start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationMinute */ "c"]) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationWeek */ "e"];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utcMonday; });
/* unused harmony export utcTuesday */
/* unused harmony export utcWednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcThursday; });
/* unused harmony export utcFriday */
/* unused harmony export utcSaturday */
/* unused harmony export utcSundays */
/* unused harmony export utcMondays */
/* unused harmony export utcTuesdays */
/* unused harmony export utcWednesdays */
/* unused harmony export utcThursdays */
/* unused harmony export utcFridays */
/* unused harmony export utcSaturdays */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);



function utcWeekday(i) {
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function (start, end) {
    return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationWeek */ "e"];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return powish; });
/* unused harmony export default */
/* unused harmony export sqrt */
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




function transformPow(exponent) {
  return function (x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(_continuous__WEBPACK_IMPORTED_MODULE_1__[/* identity */ "c"], _continuous__WEBPACK_IMPORTED_MODULE_1__[/* identity */ "c"]),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(_continuous__WEBPACK_IMPORTED_MODULE_1__[/* identity */ "c"], _continuous__WEBPACK_IMPORTED_MODULE_1__[/* identity */ "c"]) : exponent === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function (_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__[/* linearish */ "b"])(scale);
}
function pow() {
  var scale = powish(Object(_continuous__WEBPACK_IMPORTED_MODULE_1__[/* transformer */ "d"])());

  scale.copy = function () {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_1__[/* copy */ "a"])(scale, pow()).exponent(scale.exponent());
  };

  _init__WEBPACK_IMPORTED_MODULE_2__[/* initRange */ "b"].apply(scale, arguments);
  return scale;
}
function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

/* harmony default export */ __webpack_exports__["a"] = (function (values, p, valueof) {
  if (valueof == null) valueof = _number__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ __webpack_exports__["a"] = (function (selector) {
  return selector == null ? none : function () {
    return this.querySelector(selector);
  };
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function responseText(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.text();
}

/* harmony default export */ __webpack_exports__["a"] = (function (input, init) {
  return fetch(input, init).then(responseText);
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["a"] = (function (x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity

  var i,
      coefficient = x.slice(0, i); // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).

  return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);


/* harmony default export */ __webpack_exports__["a"] = (function (node) {
  var event = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();
  if (event.changedTouches) event = event.changedTouches[0];
  return Object(_point__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(node, event);
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return blurX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return blurY; });
// TODO Optimize edge cases.
// TODO Optimize index calculation.
// TODO Optimize arguments.
function blurX(source, target, r) {
  var n = source.width,
      m = source.height,
      w = (r << 1) + 1;

  for (var j = 0; j < m; ++j) {
    for (var i = 0, sr = 0; i < n + r; ++i) {
      if (i < n) {
        sr += source.data[i + j * n];
      }

      if (i >= r) {
        if (i >= w) {
          sr -= source.data[i - w + j * n];
        }

        target.data[i - r + j * n] = sr / Math.min(i + 1, n - 1 + w - i, w);
      }
    }
  }
} // TODO Optimize edge cases.
// TODO Optimize index calculation.
// TODO Optimize arguments.

function blurY(source, target, r) {
  var n = source.width,
      m = source.height,
      w = (r << 1) + 1;

  for (var i = 0; i < n; ++i) {
    for (var j = 0, sr = 0; j < m + r; ++j) {
      if (j < m) {
        sr += source.data[i + j * n];
      }

      if (j >= r) {
        if (j >= w) {
          sr -= source.data[i + (j - w) * n];
        }

        target.data[i + (j - r) * n] = sr / Math.min(j + 1, m - 1 + w - j, w);
      }
    }
  }
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Color */
/* unused harmony export darker */
/* unused harmony export brighter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return color; });
/* unused harmony export rgbConvert */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rgb; });
/* unused harmony export Rgb */
/* unused harmony export hslConvert */
/* unused harmony export hsl */
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);

function Color() {}
var _darker = 0.7;


var _brighter = 1 / _darker;


var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};
Object(_define_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Color, color, {
  copy: function copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
  : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
  : l === 8 ? new Rgb(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
  : l === 4 ? new Rgb(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
  : null // invalid hex
  ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
  : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
  : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
  : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
  : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
  : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
  : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
  : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
Object(_define_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Rgb, rgb, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__[/* extend */ "b"])(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function rgb() {
    return this;
  },
  displayable: function displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity;
  a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;

  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }

  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Hsl, hsl, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__[/* extend */ "b"])(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function formatHsl() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
  }
}));
/* From FvD 13.37, CSS Color Module Level 3 */

function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export divergingLog */
/* unused harmony export divergingSymlog */
/* unused harmony export divergingPow */
/* unused harmony export divergingSqrt */
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var _sequential__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _symlog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56);
/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);








function transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = _continuous__WEBPACK_IMPORTED_MODULE_0__[/* identity */ "c"],
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (x < t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function (_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), t2 = transform(x2 = +_[2]), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), scale) : [x0, x1, x2];
  };

  scale.clamp = function (_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function (_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function (t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1);
    return scale;
  };
}

function diverging() {
  var scale = Object(_linear__WEBPACK_IMPORTED_MODULE_2__[/* linearish */ "b"])(transformer()(_continuous__WEBPACK_IMPORTED_MODULE_0__[/* identity */ "c"]));

  scale.copy = function () {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__[/* copy */ "a"])(scale, diverging());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__[/* initInterpolator */ "a"].apply(scale, arguments);
}
function divergingLog() {
  var scale = Object(_log__WEBPACK_IMPORTED_MODULE_3__[/* loggish */ "a"])(transformer()).domain([0.1, 1, 10]);

  scale.copy = function () {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__[/* copy */ "a"])(scale, divergingLog()).base(scale.base());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__[/* initInterpolator */ "a"].apply(scale, arguments);
}
function divergingSymlog() {
  var scale = Object(_symlog__WEBPACK_IMPORTED_MODULE_5__[/* symlogish */ "a"])(transformer());

  scale.copy = function () {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__[/* copy */ "a"])(scale, divergingSymlog()).constant(scale.constant());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__[/* initInterpolator */ "a"].apply(scale, arguments);
}
function divergingPow() {
  var scale = Object(_pow__WEBPACK_IMPORTED_MODULE_6__[/* powish */ "a"])(transformer());

  scale.copy = function () {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__[/* copy */ "a"])(scale, divergingPow()).exponent(scale.exponent());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__[/* initInterpolator */ "a"].apply(scale, arguments);
}
function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bisectRight */
/* unused harmony export bisectLeft */
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);


var ascendingBisect = Object(_bisector__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ascending__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["a"] = (bisectRight);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);
/* harmony default export */ __webpack_exports__["a"] = (function (start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;
  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));

    while (++i < n) {
      ticks[i] = (start + i) * step;
    }
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));

    while (++i < n) {
      ticks[i] = (start - i) / step;
    }
  }

  if (reverse) ticks.reverse();
  return ticks;
});
function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;else if (error >= e5) step1 *= 5;else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (node) {
  return node.ownerDocument && node.ownerDocument.defaultView || // node is a Node
  node.document && node // node is a Window
  || node.defaultView; // node is a Document
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);



function creatorInherit(name) {
  return function () {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces__WEBPACK_IMPORTED_MODULE_1__[/* xhtml */ "b"] && document.documentElement.namespaceURI === _namespaces__WEBPACK_IMPORTED_MODULE_1__[/* xhtml */ "b"] ? document.createElement(name) : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function () {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loggish; });
/* unused harmony export default */
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(144);
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(112);
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);






function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : function (x) {
    return Math.pow(base, x);
  };
}

function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function (x) {
    return Math.log(x) / base;
  });
}

function reflect(f) {
  return function (x) {
    return -f(-x);
  };
}

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);

    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }

    return scale;
  }

  scale.base = function (_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function (_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function (count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;
    if (r = v < u) i = u, u = v, v = i;
    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* ticks */ "k"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function (count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__[/* format */ "a"])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?

    return function (d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function () {
    return domain(Object(_nice__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(domain(), {
      floor: function floor(x) {
        return pows(Math.floor(logs(x)));
      },
      ceil: function ceil(x) {
        return pows(Math.ceil(logs(x)));
      }
    }));
  };

  return scale;
}
function log() {
  var scale = loggish(Object(_continuous__WEBPACK_IMPORTED_MODULE_3__[/* transformer */ "d"])()).domain([1, 10]);

  scale.copy = function () {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_3__[/* copy */ "a"])(scale, log()).base(scale.base());
  };

  _init__WEBPACK_IMPORTED_MODULE_4__[/* initRange */ "b"].apply(scale, arguments);
  return scale;
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symlogish; });
/* unused harmony export default */
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




function transformSymlog(c) {
  return function (x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function (x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1,
      scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function (_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__[/* linearish */ "b"])(scale);
}
function symlog() {
  var scale = symlogish(Object(_continuous__WEBPACK_IMPORTED_MODULE_1__[/* transformer */ "d"])());

  scale.copy = function () {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_1__[/* copy */ "a"])(scale, symlog()).constant(scale.constant());
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__[/* initRange */ "b"].apply(scale, arguments);
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(271);
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(270);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(272);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(131);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57);
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }










/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  var t = _typeof(b),
      c;

  return b == null || t === "boolean" ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(b) : (t === "number" ? _number_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"] : t === "string" ? (c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]) : _string_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"] : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] ? _rgb_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"] : Object(_numberArray_js__WEBPACK_IMPORTED_MODULE_8__[/* isNumberArray */ "b"])(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"] : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_2__[/* genericArray */ "a"] : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] : _number_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(a, b);
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isNumberArray; });
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function (t) {
    for (i = 0; i < n; ++i) {
      c[i] = a[i] * (1 - t) + b[i] * t;
    }

    return c;
  };
});
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cellHalfedgeStart; });
/* unused harmony export cellHalfedgeEnd */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sortCellHalfedges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clipCells; });
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


function createCell(site) {
  return _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* cells */ "b"][site.index] = {
    site: site,
    halfedges: []
  };
}

function cellHalfedgeAngle(cell, edge) {
  var site = cell.site,
      va = edge.left,
      vb = edge.right;
  if (site === vb) vb = va, va = site;
  if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va) va = edge[1], vb = edge[0];else va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}

function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}
function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}
function sortCellHalfedges() {
  for (var i = 0, n = _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* cells */ "b"].length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* cells */ "b"][i]) && (m = (halfedges = cell.halfedges).length)) {
      var index = new Array(m),
          array = new Array(m);

      for (j = 0; j < m; ++j) {
        index[j] = j, array[j] = cellHalfedgeAngle(cell, _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* edges */ "e"][halfedges[j]]);
      }

      index.sort(function (i, j) {
        return array[j] - array[i];
      });

      for (j = 0; j < m; ++j) {
        array[j] = halfedges[index[j]];
      }

      for (j = 0; j < m; ++j) {
        halfedges[j] = array[j];
      }
    }
  }
}
function clipCells(x0, y0, x1, y1) {
  var nCells = _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* cells */ "b"].length,
      iCell,
      cell,
      site,
      iHalfedge,
      halfedges,
      nHalfedges,
      start,
      startX,
      startY,
      end,
      endX,
      endY,
      cover = true;

  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* cells */ "b"][iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length; // Remove any dangling clipped edges.

      while (iHalfedge--) {
        if (!_Diagram__WEBPACK_IMPORTED_MODULE_1__[/* edges */ "e"][halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      } // Insert any border edges as necessary.


      iHalfedge = 0, nHalfedges = halfedges.length;

      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* edges */ "e"][halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start = cellHalfedgeStart(cell, _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* edges */ "e"][halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];

        if (Math.abs(endX - startX) > _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon */ "f"] || Math.abs(endY - startY) > _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon */ "f"]) {
          halfedges.splice(iHalfedge, 0, _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* edges */ "e"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__[/* createBorderEdge */ "b"])(site, end, Math.abs(endX - x0) < _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon */ "f"] && y1 - endY > _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon */ "f"] ? [x0, Math.abs(startX - x0) < _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon */ "f"] ? startY : y1] : Math.abs(endY - y1) < _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon */ "f"] && x1 - endX > _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon */ "f"] ? [Math.abs(startY - y1) < _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon */ "f"] ? startX : x1, y1] : Math.abs(endX - x1) < _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon */ "f"] && endY - y0 > _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon */ "f"] ? [x1, Math.abs(startX - x1) < _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon */ "f"] ? startY : y0] : Math.abs(endY - y0) < _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon */ "f"] && endX - x0 > _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon */ "f"] ? [Math.abs(startY - y0) < _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* epsilon */ "f"] ? startX : x0, y0] : null)) - 1);
          ++nHalfedges;
        }
      }

      if (nHalfedges) cover = false;
    }
  } // If there weren’t any edges, have the closest site cover the extent.
  // It doesn’t matter which corner of the extent we measure!


  if (cover) {
    var dx,
        dy,
        d2,
        dc = Infinity;

    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* cells */ "b"][iCell]) {
        site = cell.site;
        dx = site[0] - x0;
        dy = site[1] - y0;
        d2 = dx * dx + dy * dy;
        if (d2 < dc) dc = d2, cover = cell;
      }
    }

    if (cover) {
      var v00 = [x0, y0],
          v01 = [x0, y1],
          v11 = [x1, y1],
          v10 = [x1, y0];
      cover.halfedges.push(_Diagram__WEBPACK_IMPORTED_MODULE_1__[/* edges */ "e"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__[/* createBorderEdge */ "b"])(site = cover.site, v00, v01)) - 1, _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* edges */ "e"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__[/* createBorderEdge */ "b"])(site, v01, v11)) - 1, _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* edges */ "e"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__[/* createBorderEdge */ "b"])(site, v11, v10)) - 1, _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* edges */ "e"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__[/* createBorderEdge */ "b"])(site, v10, v00)) - 1);
    }
  } // Lastly delete any cells with no edges; these were entirely clipped.


  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* cells */ "b"][iCell]) {
      if (!cell.halfedges.length) {
        delete _Diagram__WEBPACK_IMPORTED_MODULE_1__[/* cells */ "b"][iCell];
      }
    }
  }
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return timer; });
/* unused harmony export timerFlush */
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var frame = 0,
    // is an animation frame pending?
timeout = 0,
    // is a timeout pending?
interval = 0,
    // are any timers active?
pokeDelay = 1000,
    // how frequently we check for clock skew
taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" && performance.now ? performance : Date,
    setFrame = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function restart(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);

    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;else taskHead = this;
      taskTail = this;
    }

    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function stop() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now(); // Get the current time, if not already set.

  ++frame; // Pretend we’ve set an alarm, if we haven’t already.

  var t = taskHead,
      e;

  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }

  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;

  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(),
      delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0,
      t1 = taskHead,
      t2,
      time = Infinity;

  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }

  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.

  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.

  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(153)))

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return extend; });
/* harmony default export */ __webpack_exports__["a"] = (function (constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);

  for (var key in definition) {
    prototype[key] = definition[key];
  }

  return prototype;
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return identity; });
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
/* harmony default export */ __webpack_exports__["a"] = (function (a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nopropagation; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

function nopropagation() {
  d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* event */ "c"].stopImmediatePropagation();
}
/* harmony default export */ __webpack_exports__["a"] = (function () {
  d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* event */ "c"].preventDefault();
  d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* event */ "c"].stopImmediatePropagation();
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export years */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var year = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function (date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function (start, end) {
  return end.getFullYear() - start.getFullYear();
}, function (date) {
  return date.getFullYear();
}); // An optimized implementation for this simple case.

year.every = function (k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (year);
var years = year.range;

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcYears */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var utcYear = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function (start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function (date) {
  return date.getUTCFullYear();
}); // An optimized implementation for this simple case.

utcYear.every = function (k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (utcYear);
var utcYears = utcYear.range;

/***/ }),
/* 67 */,
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export axisTop */
/* unused harmony export axisRight */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return axisBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return axisLeft; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(218);


var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number(scale) {
  return function (d) {
    return +scale(d);
  };
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.

  if (scale.round()) offset = Math.round(offset);
  return function (d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues,
        format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : _identity__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");
    path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
    tick = tick.merge(tickEnter);
    line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
    text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);
      tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function (d) {
        return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon).attr("transform", function (d) {
        var p = this.parentNode.__axis;
        return transform(p && isFinite(p = p(d)) ? p : position(d));
      });
    }

    tickExit.remove();
    path.attr("d", orient === left || orient == right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter : "M0.5," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + ",0.5H" + range1);
    tick.attr("opacity", 1).attr("transform", function (d) {
      return transform(position(d));
    });
    line.attr(x + "2", k * tickSizeInner);
    text.attr(x, k * spacing).text(format);
    selection.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
    selection.each(function () {
      this.__axis = position;
    });
  }

  axis.scale = function (_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function () {
    return tickArguments = _array__WEBPACK_IMPORTED_MODULE_0__[/* slice */ "a"].call(arguments), axis;
  };

  axis.tickArguments = function (_) {
    return arguments.length ? (tickArguments = _ == null ? [] : _array__WEBPACK_IMPORTED_MODULE_0__[/* slice */ "a"].call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function (_) {
    return arguments.length ? (tickValues = _ == null ? null : _array__WEBPACK_IMPORTED_MODULE_0__[/* slice */ "a"].call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function (_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function (_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function (_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function (_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function (_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}
function axisRight(scale) {
  return axis(right, scale);
}
function axisBottom(scale) {
  return axis(bottom, scale);
}
function axisLeft(scale) {
  return axis(left, scale);
}

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export brushSelection */
/* unused harmony export brushX */
/* unused harmony export brushY */
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(120);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(115);
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(269);
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64);








var MODE_DRAG = {
  name: "drag"
},
    MODE_SPACE = {
  name: "space"
},
    MODE_HANDLE = {
  name: "handle"
},
    MODE_CENTER = {
  name: "center"
};

function number1(e) {
  return [+e[0], +e[1]];
}

function number2(e) {
  return [number1(e[0]), number1(e[1])];
}

function toucher(identifier) {
  return function (target) {
    return Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].touches, identifier);
  };
}

var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function input(x, e) {
    return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]];
  },
  output: function output(xy) {
    return xy && [xy[0][0], xy[1][0]];
  }
};
var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function input(y, e) {
    return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]];
  },
  output: function output(xy) {
    return xy && [xy[0][1], xy[1][1]];
  }
};
var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function input(xy) {
    return xy == null ? null : number2(xy);
  },
  output: function output(xy) {
    return xy;
  }
};
var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};
var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};
var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};
var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};
var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return {
    type: t
  };
} // Ignore right-click, since that should open the context menu.


function defaultFilter() {
  return !d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].ctrlKey && !d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;

  if (svg.hasAttribute("viewBox")) {
    svg = svg.viewBox.baseVal;
    return [[svg.x, svg.y], [svg.x + svg.width, svg.y + svg.height]];
  }

  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
} // Like d3.local, but with the name “__brush” rather than auto-generated.


function local(node) {
  while (!node.__brush) {
    if (!(node = node.parentNode)) return;
  }

  return node.__brush;
}

function empty(extent) {
  return extent[0][0] === extent[1][0] || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}
function brushX() {
  return brush(X);
}
function brushY() {
  return brush(Y);
}
/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return brush(XY);
});

function brush(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      touchable = defaultTouchable,
      keys = true,
      listeners = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group.property("__brush", initialize).selectAll(".overlay").data([type("overlay")]);
    overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", cursors.overlay).merge(overlay).each(function () {
      var extent = local(this).extent;
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).attr("x", extent[0][0]).attr("y", extent[0][1]).attr("width", extent[1][0] - extent[0][0]).attr("height", extent[1][1] - extent[0][1]);
    });
    group.selectAll(".selection").data([type("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
    var handle = group.selectAll(".handle").data(dim.handles, function (d) {
      return d.type;
    });
    handle.exit().remove();
    handle.enter().append("rect").attr("class", function (d) {
      return "handle handle--" + d.type;
    }).attr("cursor", function (d) {
      return cursors[d.type];
    });
    group.each(redraw).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", started).filter(touchable).on("touchstart.brush", started).on("touchmove.brush", touchmoved).on("touchend.brush touchcancel.brush", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  brush.move = function (group, selection) {
    if (group.selection) {
      group.on("start.brush", function () {
        emitter(this, arguments).beforestart().start();
      }).on("interrupt.brush end.brush", function () {
        emitter(this, arguments).end();
      }).tween("brush", function () {
        var that = this,
            state = that.__brush,
            emit = emitter(that, arguments),
            selection0 = state.selection,
            selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
            i = Object(d3_interpolate__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(selection0, selection1);

        function tween(t) {
          state.selection = t === 1 && selection1 === null ? null : i(t);
          redraw.call(that);
          emit.brush();
        }

        return selection0 !== null && selection1 !== null ? tween : tween(1);
      });
    } else {
      group.each(function () {
        var that = this,
            args = arguments,
            state = that.__brush,
            selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
            emit = emitter(that, args).beforestart();
        Object(d3_transition__WEBPACK_IMPORTED_MODULE_7__[/* interrupt */ "a"])(that);
        state.selection = selection1 === null ? null : selection1;
        redraw.call(that);
        emit.start().brush().end();
      });
    }
  };

  brush.clear = function (group) {
    brush.move(group, null);
  };

  function redraw() {
    var group = Object(d3_selection__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this),
        selection = local(this).selection;

    if (selection) {
      group.selectAll(".selection").style("display", null).attr("x", selection[0][0]).attr("y", selection[0][1]).attr("width", selection[1][0] - selection[0][0]).attr("height", selection[1][1] - selection[0][1]);
      group.selectAll(".handle").style("display", null).attr("x", function (d) {
        return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2;
      }).attr("y", function (d) {
        return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2;
      }).attr("width", function (d) {
        return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize;
      }).attr("height", function (d) {
        return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize;
      });
    } else {
      group.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }
  }

  function emitter(that, args, clean) {
    return !clean && that.__brush.emitter || new Emitter(that, args);
  }

  function Emitter(that, args) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
  }

  Emitter.prototype = {
    beforestart: function beforestart() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function start() {
      if (this.starting) this.starting = false, this.emit("start");else this.emit("brush");
      return this;
    },
    brush: function brush() {
      this.emit("brush");
      return this;
    },
    end: function end() {
      if (--this.active === 0) delete this.state.emitter, this.emit("end");
      return this;
    },
    emit: function emit(type) {
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* customEvent */ "a"])(new _event_js__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"](brush, type, dim.output(this.state.selection)), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };

  function started() {
    if (touchending && !d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].touches) return;
    if (!filter.apply(this, arguments)) return;
    var that = this,
        type = d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].target.__data__.type,
        mode = (keys && d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : keys && d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].altKey ? MODE_CENTER : MODE_HANDLE,
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0],
        w0,
        w1,
        N = extent[0][1],
        n0,
        n1,
        E = extent[1][0],
        e0,
        e1,
        S = extent[1][1],
        s0,
        s1,
        dx = 0,
        dy = 0,
        moving,
        shifting = signX && signY && keys && d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].shiftKey,
        lockX,
        lockY,
        pointer = d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].touches ? toucher(d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].changedTouches[0].identifier) : d3_selection__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
        point0 = pointer(that),
        point = point0,
        emit = emitter(that, arguments, true).beforestart();

    if (type === "overlay") {
      if (selection) moving = true;
      state.selection = selection = [[w0 = dim === Y ? W : point0[0], n0 = dim === X ? N : point0[1]], [e0 = dim === Y ? E : w0, s0 = dim === X ? S : n0]];
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;
    var group = Object(d3_selection__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(that).attr("pointer-events", "none");
    var overlay = group.selectAll(".overlay").attr("cursor", cursors[type]);

    if (d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = Object(d3_selection__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].view).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
      if (keys) view.on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true);
      Object(d3_drag__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].view);
    }

    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_10__[/* nopropagation */ "b"])();
    Object(d3_transition__WEBPACK_IMPORTED_MODULE_7__[/* interrupt */ "a"])(that);
    redraw.call(that);
    emit.start();

    function moved() {
      var point1 = pointer(that);

      if (shifting && !lockX && !lockY) {
        if (Math.abs(point1[0] - point[0]) > Math.abs(point1[1] - point[1])) lockY = true;else lockX = true;
      }

      point = point1;
      moving = true;
      Object(_noevent_js__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])();
      move();
    }

    function move() {
      var t;
      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG:
          {
            if (signX) dx = Math.max(W - w0, Math.min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
            if (signY) dy = Math.max(N - n0, Math.min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
            break;
          }

        case MODE_HANDLE:
          {
            if (signX < 0) dx = Math.max(W - w0, Math.min(E - w0, dx)), w1 = w0 + dx, e1 = e0;else if (signX > 0) dx = Math.max(W - e0, Math.min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
            if (signY < 0) dy = Math.max(N - n0, Math.min(S - n0, dy)), n1 = n0 + dy, s1 = s0;else if (signY > 0) dy = Math.max(N - s0, Math.min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
            break;
          }

        case MODE_CENTER:
          {
            if (signX) w1 = Math.max(W, Math.min(E, w0 - dx * signX)), e1 = Math.max(W, Math.min(E, e0 + dx * signX));
            if (signY) n1 = Math.max(N, Math.min(S, n0 - dy * signY)), s1 = Math.max(N, Math.min(S, s0 + dy * signY));
            break;
          }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!

      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1 || selection[0][1] !== n1 || selection[1][0] !== e1 || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush();
      }
    }

    function ended() {
      Object(_noevent_js__WEBPACK_IMPORTED_MODULE_10__[/* nopropagation */ "b"])();

      if (d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].touches) {
        if (d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function () {
          touchending = null;
        }, 500); // Ghost clicks are delayed!
      } else {
        Object(d3_drag__WEBPACK_IMPORTED_MODULE_1__[/* yesdrag */ "b"])(d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }

      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!

      if (empty(selection)) state.selection = null, redraw.call(that);
      emit.end();
    }

    function keydowned() {
      switch (d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].keyCode) {
        case 16:
          {
            // SHIFT
            shifting = signX && signY;
            break;
          }

        case 18:
          {
            // ALT
            if (mode === MODE_HANDLE) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
              move();
            }

            break;
          }

        case 32:
          {
            // SPACE; takes priority over ALT
            if (mode === MODE_HANDLE || mode === MODE_CENTER) {
              if (signX < 0) e0 = e1 - dx;else if (signX > 0) w0 = w1 - dx;
              if (signY < 0) s0 = s1 - dy;else if (signY > 0) n0 = n1 - dy;
              mode = MODE_SPACE;
              overlay.attr("cursor", cursors.selection);
              move();
            }

            break;
          }

        default:
          return;
      }

      Object(_noevent_js__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])();
    }

    function keyupped() {
      switch (d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].keyCode) {
        case 16:
          {
            // SHIFT
            if (shifting) {
              lockX = lockY = shifting = false;
              move();
            }

            break;
          }

        case 18:
          {
            // ALT
            if (mode === MODE_CENTER) {
              if (signX < 0) e0 = e1;else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1;else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
              move();
            }

            break;
          }

        case 32:
          {
            // SPACE
            if (mode === MODE_SPACE) {
              if (d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* event */ "c"].altKey) {
                if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                mode = MODE_CENTER;
              } else {
                if (signX < 0) e0 = e1;else if (signX > 0) w0 = w1;
                if (signY < 0) s0 = s1;else if (signY > 0) n0 = n1;
                mode = MODE_HANDLE;
              }

              overlay.attr("cursor", cursors[type]);
              move();
            }

            break;
          }

        default:
          return;
      }

      Object(_noevent_js__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])();
    }
  }

  function touchmoved() {
    emitter(this, arguments).moved();
  }

  function touchended() {
    emitter(this, arguments).ended();
  }

  function initialize() {
    var state = this.__brush || {
      selection: null
    };
    state.extent = number2(extent.apply(this, arguments));
    state.dim = dim;
    return state;
  }

  brush.extent = function (_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(number2(_)), brush) : extent;
  };

  brush.filter = function (_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(!!_), brush) : filter;
  };

  brush.touchable = function (_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(!!_), brush) : touchable;
  };

  brush.handleSize = function (_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.keyModifiers = function (_) {
    return arguments.length ? (keys = !!_, brush) : keys;
  };

  brush.on = function () {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implicit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ordinal; });
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



var implicit = {
  name: "implicit"
};
function ordinal() {
  var index = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__[/* map */ "a"])(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "",
        i = index.get(key);

    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }

    return range[(i - 1) % range.length];
  }

  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__[/* map */ "a"])();
    var i = -1,
        n = _.length,
        d,
        key;

    while (++i < n) {
      if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    }

    return scale;
  };

  scale.range = function (_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__[/* slice */ "b"].call(_), scale) : range.slice();
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function () {
    return ordinal(domain, range).unknown(unknown);
  };

  _init__WEBPACK_IMPORTED_MODULE_2__[/* initRange */ "b"].apply(scale, arguments);
  return scale;
}

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (selector) {
  return function () {
    return this.matches(selector);
  };
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["a"] = (function (selector) {
  return selector == null ? empty : function () {
    return this.querySelectorAll(selector);
  };
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return y; });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);



function x(d) {
  return d.x;
}
function y(d) {
  return d.y;
}
var initialRadius = 10,
    initialAngle = Math.PI * (3 - Math.sqrt(5));
/* unused harmony default export */ var _unused_webpack_default_export = (function (_nodes) {
  var simulation,
      _alpha = 1,
      _alphaMin = 0.001,
      _alphaDecay = 1 - Math.pow(_alphaMin, 1 / 300),
      _alphaTarget = 0,
      _velocityDecay = 0.6,
      forces = Object(d3_collection__WEBPACK_IMPORTED_MODULE_1__[/* map */ "a"])(),
      stepper = Object(d3_timer__WEBPACK_IMPORTED_MODULE_2__[/* timer */ "c"])(step),
      event = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("tick", "end");

  if (_nodes == null) _nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);

    if (_alpha < _alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick(iterations) {
    var i,
        n = _nodes.length,
        node;
    if (iterations === undefined) iterations = 1;

    for (var k = 0; k < iterations; ++k) {
      _alpha += (_alphaTarget - _alpha) * _alphaDecay;
      forces.each(function (force) {
        force(_alpha);
      });

      for (i = 0; i < n; ++i) {
        node = _nodes[i];
        if (node.fx == null) node.x += node.vx *= _velocityDecay;else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= _velocityDecay;else node.y = node.fy, node.vy = 0;
      }
    }

    return simulation;
  }

  function initializeNodes() {
    for (var i = 0, n = _nodes.length, node; i < n; ++i) {
      node = _nodes[i], node.index = i;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;

      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(i),
            angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }

      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(_nodes);
    return force;
  }

  initializeNodes();
  return simulation = {
    tick: tick,
    restart: function restart() {
      return stepper.restart(step), simulation;
    },
    stop: function stop() {
      return stepper.stop(), simulation;
    },
    nodes: function nodes(_) {
      return arguments.length ? (_nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : _nodes;
    },
    alpha: function alpha(_) {
      return arguments.length ? (_alpha = +_, simulation) : _alpha;
    },
    alphaMin: function alphaMin(_) {
      return arguments.length ? (_alphaMin = +_, simulation) : _alphaMin;
    },
    alphaDecay: function alphaDecay(_) {
      return arguments.length ? (_alphaDecay = +_, simulation) : +_alphaDecay;
    },
    alphaTarget: function alphaTarget(_) {
      return arguments.length ? (_alphaTarget = +_, simulation) : _alphaTarget;
    },
    velocityDecay: function velocityDecay(_) {
      return arguments.length ? (_velocityDecay = 1 - _, simulation) : 1 - _velocityDecay;
    },
    force: function force(name, _) {
      return arguments.length > 1 ? (_ == null ? forces.remove(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
    },
    find: function find(x, y, radius) {
      var i = 0,
          n = _nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;
      if (radius == null) radius = Infinity;else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = _nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },
    on: function on(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterNode; });
/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["b"] = (function () {
  return new _index__WEBPACK_IMPORTED_MODULE_1__[/* Selection */ "a"](this._enter || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]), this._parents);
});
function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function appendChild(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function insertBefore(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function querySelector(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function querySelectorAll(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);


/* harmony default export */ __webpack_exports__["a"] = (function (node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return Object(_point__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(node, touch);
    }
  }

  return null;
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function (name, i) {
    return JSON.stringify(name) + ": d[" + i + "] || \"\"";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function (row, i) {
    return f(object(row), i, columns);
  };
} // Compute unique columns in order of discovery.


function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];
  rows.forEach(function (row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });
  return columns;
}

function pad(value, width) {
  var s = value + "",
      length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}

function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6) : year > 9999 ? "+" + pad(year, 6) : pad(year, 4);
}

function formatDate(date) {
  var hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date" : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2) + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z" : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z" : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z" : "");
}

/* harmony default export */ __webpack_exports__["a"] = (function (delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert,
        columns,
        rows = parseRows(text, function (row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [],
        // output rows
    N = text.length,
        I = 0,
        // current character index
    n = 0,
        // current line number
    t,
        // current token
    eof = N <= 0,
        // current token followed by EOF?
    eol = false; // current token followed by EOL?
    // Strip the trailing newline.

    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL; // Unescape quotes.

      var i,
          j = I,
          c;

      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE) {
          ;
        }

        if ((i = I) >= N) eof = true;else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;else if (c === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE) ++I;
        }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      } // Find next delimiter or newline.


      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;else if (c === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE) ++I;
        } else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      } // Return last token before EOF.


      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];

      while (t !== EOL && t !== EOF) {
        row.push(t), t = token();
      }

      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function preformatBody(rows, columns) {
    return rows.map(function (row) {
      return columns.map(function (column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }

  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(value) {
    return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\"" : value;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatBody: formatBody,
    formatRows: formatRows,
    formatRow: formatRow,
    formatValue: formatValue
  };
});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return +x;
});

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rgbBasis */
/* unused harmony export rgbBasisClosed */
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(107);
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(222);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(130);




/* harmony default export */ __webpack_exports__["a"] = ((function rgbGamma(y) {
  var color = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__[/* gamma */ "b"])(y);

  function rgb(start, end) {
    var r = color((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[/* rgb */ "b"])(start)).r, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[/* rgb */ "b"])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(start.opacity, end.opacity);
    return function (t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;
  return rgb;
})(1));

function rgbSpline(spline) {
  return function (colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i,
        color;

    for (i = 0; i < n; ++i) {
      color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[/* rgb */ "b"])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }

    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function (t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function constant() {
    return x;
  };
});

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export csv */
/* unused harmony export tsv */
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(351);
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(352);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);



function dsvParse(parse) {
  return function (input, init, row) {
    if (arguments.length === 2 && typeof init === "function") row = init, init = undefined;
    return Object(_text__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(input, init).then(function (response) {
      return parse(response, row);
    });
  };
}

function dsv(delimiter, input, init, row) {
  if (arguments.length === 3 && typeof init === "function") row = init, init = undefined;
  var format = Object(d3_dsv__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(delimiter);
  return Object(_text__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(input, init).then(function (response) {
    return format.parse(response, row);
  });
}
var csv = dsvParse(d3_dsv__WEBPACK_IMPORTED_MODULE_1__[/* csvParse */ "a"]);
var tsv = dsvParse(d3_dsv__WEBPACK_IMPORTED_MODULE_2__[/* tsvParse */ "a"]);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export html */
/* unused harmony export svg */
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);


function parser(type) {
  return function (input, init) {
    return Object(_text__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(input, init).then(function (text) {
      return new DOMParser().parseFromString(text, type);
    });
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (parser("application/xml"));
var html = parser("text/html");
var svg = parser("image/svg+xml");

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getValue */
/* unused harmony export getObject */
/* unused harmony export getFillColor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCommonValue; });
/* harmony import */ var _dataViewObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/** Gets the value of the given object/property pair. */

function getValue(objects, propertyId, defaultValue) {
  if (!objects) {
    return defaultValue;
  }

  return _dataViewObject__WEBPACK_IMPORTED_MODULE_0__[/* getValue */ "a"](objects[propertyId.objectName], propertyId.propertyName, defaultValue);
}
/** Gets an object from objects. */

function getObject(objects, objectName, defaultValue) {
  if (objects && objects[objectName]) {
    return objects[objectName];
  }

  return defaultValue;
}
/** Gets the solid color from a fill property. */

function getFillColor(objects, propertyId, defaultColor) {
  var value = getValue(objects, propertyId);

  if (!value || !value.solid) {
    return defaultColor;
  }

  return value.solid.color;
}
function getCommonValue(objects, propertyId, defaultValue) {
  var value = getValue(objects, propertyId, defaultValue);

  if (value && value.solid) {
    return value.solid.color;
  }

  if (value === undefined || value === null || _typeof(value) === "object" && !value.solid) {
    return defaultValue;
  }

  return value;
}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getValue; });
/* unused harmony export getFillColorByPropertyName */
function getValue(object, propertyName, defaultValue) {
  if (!object) {
    return defaultValue;
  }

  var propertyValue = object[propertyName];

  if (propertyValue === undefined) {
    return defaultValue;
  }

  return propertyValue;
}
/** Gets the solid color from a fill property using only a propertyName */

function getFillColorByPropertyName(object, propertyName, defaultColor) {
  var value = getValue(object, propertyName);

  if (!value || !value.solid) {
    return defaultColor;
  }

  return value.solid.color;
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);

/* harmony default export */ __webpack_exports__["a"] = (function (compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function left(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;

      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;else hi = mid;
      }

      return lo;
    },
    right: function right(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;

      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;else lo = mid + 1;
      }

      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function (d, x) {
    return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(f(d), x);
  };
}

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pair; });
/* unused harmony default export */ var _unused_webpack_default_export = (function (array, f) {
  if (f == null) f = pair;
  var i = 0,
      n = array.length - 1,
      p = array[0],
      pairs = new Array(n < 0 ? 0 : n);

  while (i < n) {
    pairs[i] = f(p, p = array[++i]);
  }

  return pairs;
});
function pair(a, b) {
  return [a, b];
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);

/* harmony default export */ __webpack_exports__["a"] = (function (array, f) {
  var v = Object(_variance__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(array, f);
  return v ? Math.sqrt(v) : v;
});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

/* harmony default export */ __webpack_exports__["a"] = (function (values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  } else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) {
      // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;

        while (++i < n) {
          // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;

        while (++i < n) {
          // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) {
      // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;

        while (++i < n) {
          // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;

        while (++i < n) {
          // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);

/* harmony default export */ __webpack_exports__["a"] = (function (matrix) {
  if (!(n = matrix.length)) return [];

  for (var i = -1, m = Object(_min__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }

  return transpose;
});

function length(d) {
  return d.length;
}

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/* harmony default export */ __webpack_exports__["a"] = (function (node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;
  if (!schedules) return;
  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty = false;
      continue;
    }

    active = schedule.state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* STARTING */ "d"] && schedule.state < _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* ENDING */ "b"];
    schedule.state = _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* ENDED */ "a"];
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(110);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(274);
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(275);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(276);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(277);







var cases = [[], [[[1.0, 1.5], [0.5, 1.0]]], [[[1.5, 1.0], [1.0, 1.5]]], [[[1.5, 1.0], [0.5, 1.0]]], [[[1.0, 0.5], [1.5, 1.0]]], [[[1.0, 1.5], [0.5, 1.0]], [[1.0, 0.5], [1.5, 1.0]]], [[[1.0, 0.5], [1.0, 1.5]]], [[[1.0, 0.5], [0.5, 1.0]]], [[[0.5, 1.0], [1.0, 0.5]]], [[[1.0, 1.5], [1.0, 0.5]]], [[[0.5, 1.0], [1.0, 0.5]], [[1.5, 1.0], [1.0, 1.5]]], [[[1.5, 1.0], [1.0, 0.5]]], [[[0.5, 1.0], [1.5, 1.0]]], [[[1.0, 1.5], [1.5, 1.0]]], [[[0.5, 1.0], [1.0, 1.5]]], []];
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var dx = 1,
      dy = 1,
      threshold = d3_array__WEBPACK_IMPORTED_MODULE_0__[/* thresholdSturges */ "h"],
      smooth = smoothLinear;

  function contours(values) {
    var tz = threshold(values); // Convert number of thresholds into uniform thresholds.

    if (!Array.isArray(tz)) {
      var domain = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* extent */ "d"])(values),
          start = domain[0],
          stop = domain[1];
      tz = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* tickStep */ "j"])(start, stop, tz);
      tz = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* range */ "g"])(Math.floor(start / tz) * tz, Math.floor(stop / tz) * tz, tz);
    } else {
      tz = tz.slice().sort(_ascending__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
    }

    return tz.map(function (value) {
      return contour(values, value);
    });
  } // Accumulate, smooth contour rings, assign holes to exterior rings.
  // Based on https://github.com/mbostock/shapefile/blob/v0.6.2/shp/polygon.js


  function contour(values, value) {
    var polygons = [],
        holes = [];
    isorings(values, value, function (ring) {
      smooth(ring, values, value);
      if (Object(_area__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ring) > 0) polygons.push([ring]);else holes.push(ring);
    });
    holes.forEach(function (hole) {
      for (var i = 0, n = polygons.length, polygon; i < n; ++i) {
        if (Object(_contains__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])((polygon = polygons[i])[0], hole) !== -1) {
          polygon.push(hole);
          return;
        }
      }
    });
    return {
      type: "MultiPolygon",
      value: value,
      coordinates: polygons
    };
  } // Marching squares with isolines stitched into rings.
  // Based on https://github.com/topojson/topojson-client/blob/v3.0.0/src/stitch.js


  function isorings(values, value, callback) {
    var fragmentByStart = new Array(),
        fragmentByEnd = new Array(),
        x,
        y,
        t0,
        t1,
        t2,
        t3; // Special case for the first row (y = -1, t2 = t3 = 0).

    x = y = -1;
    t1 = values[0] >= value;
    cases[t1 << 1].forEach(stitch);

    while (++x < dx - 1) {
      t0 = t1, t1 = values[x + 1] >= value;
      cases[t0 | t1 << 1].forEach(stitch);
    }

    cases[t1 << 0].forEach(stitch); // General case for the intermediate rows.

    while (++y < dy - 1) {
      x = -1;
      t1 = values[y * dx + dx] >= value;
      t2 = values[y * dx] >= value;
      cases[t1 << 1 | t2 << 2].forEach(stitch);

      while (++x < dx - 1) {
        t0 = t1, t1 = values[y * dx + dx + x + 1] >= value;
        t3 = t2, t2 = values[y * dx + x + 1] >= value;
        cases[t0 | t1 << 1 | t2 << 2 | t3 << 3].forEach(stitch);
      }

      cases[t1 | t2 << 3].forEach(stitch);
    } // Special case for the last row (y = dy - 1, t0 = t1 = 0).


    x = -1;
    t2 = values[y * dx] >= value;
    cases[t2 << 2].forEach(stitch);

    while (++x < dx - 1) {
      t3 = t2, t2 = values[y * dx + x + 1] >= value;
      cases[t2 << 2 | t3 << 3].forEach(stitch);
    }

    cases[t2 << 3].forEach(stitch);

    function stitch(line) {
      var start = [line[0][0] + x, line[0][1] + y],
          end = [line[1][0] + x, line[1][1] + y],
          startIndex = index(start),
          endIndex = index(end),
          f,
          g;

      if (f = fragmentByEnd[startIndex]) {
        if (g = fragmentByStart[endIndex]) {
          delete fragmentByEnd[f.end];
          delete fragmentByStart[g.start];

          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[f.start] = fragmentByEnd[g.end] = {
              start: f.start,
              end: g.end,
              ring: f.ring.concat(g.ring)
            };
          }
        } else {
          delete fragmentByEnd[f.end];
          f.ring.push(end);
          fragmentByEnd[f.end = endIndex] = f;
        }
      } else if (f = fragmentByStart[endIndex]) {
        if (g = fragmentByEnd[startIndex]) {
          delete fragmentByStart[f.start];
          delete fragmentByEnd[g.end];

          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[g.start] = fragmentByEnd[f.end] = {
              start: g.start,
              end: f.end,
              ring: g.ring.concat(f.ring)
            };
          }
        } else {
          delete fragmentByStart[f.start];
          f.ring.unshift(start);
          fragmentByStart[f.start = startIndex] = f;
        }
      } else {
        fragmentByStart[startIndex] = fragmentByEnd[endIndex] = {
          start: startIndex,
          end: endIndex,
          ring: [start, end]
        };
      }
    }
  }

  function index(point) {
    return point[0] * 2 + point[1] * (dx + 1) * 4;
  }

  function smoothLinear(ring, values, value) {
    ring.forEach(function (point) {
      var x = point[0],
          y = point[1],
          xt = x | 0,
          yt = y | 0,
          v0,
          v1 = values[yt * dx + xt];

      if (x > 0 && x < dx && xt === x) {
        v0 = values[yt * dx + xt - 1];
        point[0] = x + (value - v0) / (v1 - v0) - 0.5;
      }

      if (y > 0 && y < dy && yt === y) {
        v0 = values[(yt - 1) * dx + xt];
        point[1] = y + (value - v0) / (v1 - v0) - 0.5;
      }
    });
  }

  contours.contour = contour;

  contours.size = function (_) {
    if (!arguments.length) return [dx, dy];

    var _0 = Math.ceil(_[0]),
        _1 = Math.ceil(_[1]);

    if (!(_0 > 0) || !(_1 > 0)) throw new Error("invalid size");
    return dx = _0, dy = _1, contours;
  };

  contours.thresholds = function (_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_array__WEBPACK_IMPORTED_MODULE_1__[/* slice */ "a"].call(_)) : Object(_constant__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_), contours) : threshold;
  };

  contours.smooth = function (_) {
    return arguments.length ? (smooth = _ ? smoothLinear : _noop__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], contours) : smooth === smoothLinear;
  };

  return contours;
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _defaultSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);

/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomNormal(source) {
  function randomNormal(mu, sigma) {
    var x, r;
    mu = mu == null ? 0 : +mu;
    sigma = sigma == null ? 1 : +sigma;
    return function () {
      var y; // If available, use the second previously-generated uniform random.

      if (x != null) y = x, x = null; // Otherwise, generate a new x and y.
      else do {
          x = source() * 2 - 1;
          y = source() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
      return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
    };
  }

  randomNormal.source = sourceRandomNormal;
  return randomNormal;
})(_defaultSource__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]));

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _defaultSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);

/* harmony default export */ __webpack_exports__["a"] = ((function sourceRandomIrwinHall(source) {
  function randomIrwinHall(n) {
    return function () {
      for (var sum = 0, i = 0; i < n; ++i) {
        sum += source();
      }

      return sum;
    };
  }

  randomIrwinHall.source = sourceRandomIrwinHall;
  return randomIrwinHall;
})(_defaultSource__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]));

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(118);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(354);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(144);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(355);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(356);


/* harmony default export */ __webpack_exports__["a"] = (function (start, stop, count, specifier) {
  var step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* tickStep */ "j"])(start, stop, count),
      precision;
  specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(specifier == null ? ",f" : specifier);

  switch (specifier.type) {
    case "s":
      {
        var value = Math.max(Math.abs(start), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(step, value))) specifier.precision = precision;
        return Object(d3_format__WEBPACK_IMPORTED_MODULE_3__[/* formatPrefix */ "b"])(specifier, value);
      }

    case "":
    case "e":
    case "g":
    case "p":
    case "r":
      {
        if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
        break;
      }

    case "f":
    case "%":
      {
        if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
  }

  return Object(d3_format__WEBPACK_IMPORTED_MODULE_3__[/* format */ "a"])(specifier);
});

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calendar; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(357);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(145);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(358);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(359);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(297);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(298);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(299);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4);
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(112);







var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_11__[/* default */ "b"])(_continuous__WEBPACK_IMPORTED_MODULE_11__[/* identity */ "c"], _continuous__WEBPACK_IMPORTED_MODULE_11__[/* identity */ "c"]),
      invert = scale.invert,
      domain = scale.domain;
  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");
  var tickIntervals = [[second, 1, durationSecond], [second, 5, 5 * durationSecond], [second, 15, 15 * durationSecond], [second, 30, 30 * durationSecond], [minute, 1, durationMinute], [minute, 5, 5 * durationMinute], [minute, 15, 15 * durationMinute], [minute, 30, 30 * durationMinute], [hour, 1, durationHour], [hour, 3, 3 * durationHour], [hour, 6, 6 * durationHour], [hour, 12, 12 * durationHour], [day, 1, durationDay], [day, 2, 2 * durationDay], [week, 1, durationWeek], [month, 1, durationMonth], [month, 3, 3 * durationMonth], [year, 1, durationYear]];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10; // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.

    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* bisector */ "c"])(function (i) {
        return i[2];
      }).right(tickIntervals, target);

      if (i === tickIntervals.length) {
        step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* tickStep */ "j"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* tickStep */ "j"])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function (y) {
    return new Date(invert(y));
  };

  scale.domain = function (_) {
    return arguments.length ? domain(_array__WEBPACK_IMPORTED_MODULE_10__[/* map */ "a"].call(_, number)) : domain().map(date);
  };

  scale.ticks = function (interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop

    return r ? t.reverse() : t;
  };

  scale.tickFormat = function (count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function (interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step)) ? domain(Object(_nice__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(d, interval)) : scale;
  };

  scale.copy = function () {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_11__[/* copy */ "a"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}
/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return _init__WEBPACK_IMPORTED_MODULE_12__[/* initRange */ "b"].apply(calendar(d3_time__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], d3_time__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], d3_time__WEBPACK_IMPORTED_MODULE_3__[/* sunday */ "b"], d3_time__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], d3_time__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], d3_time__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], d3_time__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], d3_time__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], d3_time_format__WEBPACK_IMPORTED_MODULE_9__[/* timeFormat */ "a"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function areaStart() {
    this._line = 0;
  },
  areaEnd: function areaEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function point(x, y) {
    x = +x, y = +y;

    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;

      case 1:
        this._point = 2;
      // proceed

      default:
        this._context.lineTo(x, y);

        break;
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (function (context) {
  return new Linear(context);
});

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(131);


/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"] : (c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]) : d3_interpolate__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(a, b);
});

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basis; });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1,
      t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
/* harmony default export */ __webpack_exports__["b"] = (function (values) {
  var n = values.length - 1;
  return function (t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (update) {
  return new Array(update.length);
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var current = _selection_on__WEBPACK_IMPORTED_MODULE_0__[/* event */ "c"],
      source;

  while (source = current.sourceEvent) {
    current = source;
  }

  return current;
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var array = Array.prototype;
var slice = array.slice;

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefixExponent; });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var prefixExponent;
/* harmony default export */ __webpack_exports__["a"] = (function (x, p) {
  var d = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (domain, interval) {
  domain = domain.slice();
  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualSettings; });
/* unused harmony export ChartSettings */
/* harmony import */ var powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(215);


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var DataViewObjectsParser = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_0__[/* dataViewObjectsParser */ "a"].DataViewObjectsParser;
var VisualSettings =
/*#__PURE__*/
function (_DataViewObjectsParse) {
  _inherits(VisualSettings, _DataViewObjectsParse);

  function VisualSettings() {
    var _this;

    _classCallCheck(this, VisualSettings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisualSettings).apply(this, arguments));
    _this.chart = new ChartSettings();
    return _this;
  }

  return VisualSettings;
}(DataViewObjectsParser);
var ChartSettings = function ChartSettings() {
  _classCallCheck(this, ChartSettings);

  this.chartTitle = "";
};

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export nopropagation */
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

function nopropagation() {
  d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* event */ "c"].stopImmediatePropagation();
}
/* harmony default export */ __webpack_exports__["a"] = (function () {
  d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* event */ "c"].preventDefault();
  d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* event */ "c"].stopImmediatePropagation();
});

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatSpecifier; });
/* unused harmony export FormatSpecifier */
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function () {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var noop = {
  value: function value() {}
};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }

  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {
      type: t,
      name: name
    };
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function on(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length; // If no callback was specified, return the callback of the given type and name.

    if (arguments.length < 2) {
      while (++i < n) {
        if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      }

      return;
    } // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.


    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);

    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);else if (callback == null) for (t in _) {
        _[t] = set(_[t], typename.name, null);
      }
    }

    return this;
  },
  copy: function copy() {
    var copy = {},
        _ = this._;

    for (var t in _) {
      copy[t] = _[t].slice();
    }

    return new Dispatch(copy);
  },
  call: function call(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) {
      args[i] = arguments[i + 2];
    }
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);

    for (t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  },
  apply: function apply(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);

    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }

  if (callback != null) type.push({
    name: name,
    value: callback
  });
  return type;
}

/* harmony default export */ __webpack_exports__["a"] = (dispatch);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return yesdrag; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(116);


/* harmony default export */ __webpack_exports__["a"] = (function (view) {
  var root = view.document.documentElement,
      selection = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(view).on("dragstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], true);

  if ("onselectstart" in root) {
    selection.on("selectstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
});
function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(view).on("dragstart.drag", null);

  if (noclick) {
    selection.on("click.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], true);
    setTimeout(function () {
      selection.on("click.drag", null);
    }, 0);
  }

  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}

/***/ }),
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export point */
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70);



function band() {
  var scale = Object(_ordinal__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;
  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* range */ "g"])(n).map(function (i) {
      return start + step * i;
    });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function (_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function (_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function (_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function () {
    return bandwidth;
  };

  scale.step = function () {
    return step;
  };

  scale.round = function (_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function (_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function (_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function (_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function (_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function () {
    return band(domain(), range).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__[/* initRange */ "b"].apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function () {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Visual; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _charts_lineChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(216);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

try {
  __webpack_require__(348);
} catch (_a) {
  console.log("./../style/visual.less not found.");
}



var Visual =
/*#__PURE__*/
function () {
  function Visual(options) {
    _classCallCheck(this, Visual);

    this.host = options.host;
    this.selection = this.host.createSelectionManager();
    this.chart = new _charts_lineChart__WEBPACK_IMPORTED_MODULE_1__[/* LineChart */ "a"]();
    this.chart.construct(this.host, this.selection, options);
  }

  _createClass(Visual, [{
    key: "update",
    value: function update(options) {
      this.settings = _settings__WEBPACK_IMPORTED_MODULE_0__[/* VisualSettings */ "a"].parse(options.dataViews[0]);
      this.chart.update(this.settings, options);
    }
  }, {
    key: "enumerateObjectInstances",
    value: function enumerateObjectInstances(options) {
      var settings = this.settings || _settings__WEBPACK_IMPORTED_MODULE_0__[/* VisualSettings */ "a"].getDefault();
      return _settings__WEBPACK_IMPORTED_MODULE_0__[/* VisualSettings */ "a"].enumerateObjectInstances(settings, options);
    }
  }]);

  return Visual;
}();

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return gamma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nogamma; });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);


function linear(a, d) {
  return function (t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(isNaN(a) ? b : a);
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function (a, b) {
    return b - a ? exponential(a, b, y) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(isNaN(a) ? b : a);
}

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function () {
    return b;
  };
}

function one(b) {
  return function (t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0,
      // scan index for next number in b
  am,
      // current match in a
  bm,
      // current match in b
  bs,
      // string preceding current number in b, if any
  i = -1,
      // index in s
  s = [],
      // string constants and placeholders
  q = []; // number interpolators
  // Coerce inputs to strings.

  a = a + "", b = b + ""; // Interpolate pairs of numbers in a & b.

  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    if ((am = am[0]) === (bm = bm[0])) {
      // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else {
      // interpolate non-matching numbers
      s[++i] = null;
      q.push({
        i: i,
        x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(am, bm)
      });
    }

    bi = reB.lastIndex;
  } // Add remains of b.


  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  } // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.


  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
    for (var i = 0, o; i < b; ++i) {
      s[(o = q[i]).i] = o.x(t);
    }

    return s.join("");
  });
});

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseSvg; });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);

var cssNode, cssRoot, cssView, svgNode;
function parseCss(value) {
  if (value === "none") return _decompose_js__WEBPACK_IMPORTED_MODULE_0__[/* identity */ "b"];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(_decompose_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}
function parseSvg(value) {
  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__[/* identity */ "b"];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__[/* identity */ "b"];
  value = value.matrix;
  return Object(_decompose_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value.a, value.b, value.c, value.d, value.e, value.f);
}

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultX; });
function defaultX(d) {
  return d[0];
}
/* harmony default export */ __webpack_exports__["a"] = (function (_) {
  return arguments.length ? (this._x = _, this) : this._x;
});

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultY; });
function defaultY(d) {
  return d[1];
}
/* harmony default export */ __webpack_exports__["a"] = (function (_) {
  return arguments.length ? (this._y = _, this) : this._y;
});

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addAll; });
/* harmony default export */ __webpack_exports__["b"] = (function (d) {
  var x = +this._x.call(null, d),
      y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
});

function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = {
    data: d
  },
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j; // If the tree is empty, initialize the root as a leaf.

  if (!node) return tree._root = leaf, tree; // Find the existing leaf for the new point, or add it.

  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  } // Is the new point is exactly coincident with the existing point?


  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree; // Otherwise, split the leaf node until the old and new point are separated.

  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));

  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d,
      i,
      n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity; // Compute the points and their extent.

  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  } // If there were no (valid) points, abort.


  if (x0 > x1 || y0 > y1) return this; // Expand the tree to cover the new points.

  this.cover(x0, y0).cover(x1, y1); // Add the new points.

  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }

  return this;
}

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeAll; });
/* harmony default export */ __webpack_exports__["a"] = (function (d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j; // If the tree is empty, initialize the root as a leaf.

  if (!node) return this; // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.

  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
  } // Find the point to remove.

  while (node.data !== d) {
    if (!(previous = node, node = node.next)) return this;
  }

  if (next = node.next) delete node.next; // If there are multiple coincident points, remove just the point.

  if (previous) return next ? previous.next = next : delete previous.next, this; // If this is the root point, remove it.

  if (!parent) return this._root = next, this; // Remove this leaf.

  next ? parent[i] = next : delete parent[i]; // If the parent now contains exactly one leaf, collapse superfluous parents.

  if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
    if (retainer) retainer[j] = node;else this._root = node;
  }

  return this;
});
function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) {
    this.remove(data[i]);
  }

  return this;
}

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return x;
});

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(139);


/* harmony default export */ __webpack_exports__["a"] = ({
  "%": function _(x, p) {
    return (x * 100).toFixed(p);
  },
  "b": function b(x) {
    return Math.round(x).toString(2);
  },
  "c": function c(x) {
    return x + "";
  },
  "d": function d(x) {
    return Math.round(x).toString(10);
  },
  "e": function e(x, p) {
    return x.toExponential(p);
  },
  "f": function f(x, p) {
    return x.toFixed(p);
  },
  "g": function g(x, p) {
    return x.toPrecision(p);
  },
  "o": function o(x) {
    return Math.round(x).toString(8);
  },
  "p": function p(x, _p) {
    return Object(_formatRounded_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(x * 100, _p);
  },
  "r": _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  "s": _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  "X": function X(x) {
    return Math.round(x).toString(16).toUpperCase();
  },
  "x": function x(_x) {
    return Math.round(_x).toString(16);
  }
});

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

/* harmony default export */ __webpack_exports__["a"] = (function (x, p) {
  var d = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return y; });
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return y; });
function x(d) {
  return d[0];
}
function y(d) {
  return d[1];
}

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeBeach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addBeach; });
/* harmony import */ var _RedBlackTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);





var beachPool = [];

function Beach() {
  Object(_RedBlackTree__WEBPACK_IMPORTED_MODULE_0__[/* RedBlackNode */ "a"])(this);
  this.edge = this.site = this.circle = null;
}

function createBeach(site) {
  var beach = beachPool.pop() || new Beach();
  beach.site = site;
  return beach;
}

function detachBeach(beach) {
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__[/* detachCircle */ "b"])(beach);
  _Diagram__WEBPACK_IMPORTED_MODULE_4__[/* beaches */ "a"].remove(beach);
  beachPool.push(beach);
  Object(_RedBlackTree__WEBPACK_IMPORTED_MODULE_0__[/* RedBlackNode */ "a"])(beach);
}

function removeBeach(beach) {
  var circle = beach.circle,
      x = circle.x,
      y = circle.cy,
      vertex = [x, y],
      previous = beach.P,
      next = beach.N,
      disappearing = [beach];
  detachBeach(beach);
  var lArc = previous;

  while (lArc.circle && Math.abs(x - lArc.circle.x) < _Diagram__WEBPACK_IMPORTED_MODULE_4__[/* epsilon */ "f"] && Math.abs(y - lArc.circle.cy) < _Diagram__WEBPACK_IMPORTED_MODULE_4__[/* epsilon */ "f"]) {
    previous = lArc.P;
    disappearing.unshift(lArc);
    detachBeach(lArc);
    lArc = previous;
  }

  disappearing.unshift(lArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__[/* detachCircle */ "b"])(lArc);
  var rArc = next;

  while (rArc.circle && Math.abs(x - rArc.circle.x) < _Diagram__WEBPACK_IMPORTED_MODULE_4__[/* epsilon */ "f"] && Math.abs(y - rArc.circle.cy) < _Diagram__WEBPACK_IMPORTED_MODULE_4__[/* epsilon */ "f"]) {
    next = rArc.N;
    disappearing.push(rArc);
    detachBeach(rArc);
    rArc = next;
  }

  disappearing.push(rArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__[/* detachCircle */ "b"])(rArc);
  var nArcs = disappearing.length,
      iArc;

  for (iArc = 1; iArc < nArcs; ++iArc) {
    rArc = disappearing[iArc];
    lArc = disappearing[iArc - 1];
    Object(_Edge__WEBPACK_IMPORTED_MODULE_3__[/* setEdgeEnd */ "d"])(rArc.edge, lArc.site, rArc.site, vertex);
  }

  lArc = disappearing[0];
  rArc = disappearing[nArcs - 1];
  rArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__[/* createEdge */ "c"])(lArc.site, rArc.site, null, vertex);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__[/* attachCircle */ "a"])(lArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__[/* attachCircle */ "a"])(rArc);
}
function addBeach(site) {
  var x = site[0],
      directrix = site[1],
      lArc,
      rArc,
      dxl,
      dxr,
      node = _Diagram__WEBPACK_IMPORTED_MODULE_4__[/* beaches */ "a"]._;

  while (node) {
    dxl = leftBreakPoint(node, directrix) - x;
    if (dxl > _Diagram__WEBPACK_IMPORTED_MODULE_4__[/* epsilon */ "f"]) node = node.L;else {
      dxr = x - rightBreakPoint(node, directrix);

      if (dxr > _Diagram__WEBPACK_IMPORTED_MODULE_4__[/* epsilon */ "f"]) {
        if (!node.R) {
          lArc = node;
          break;
        }

        node = node.R;
      } else {
        if (dxl > -_Diagram__WEBPACK_IMPORTED_MODULE_4__[/* epsilon */ "f"]) {
          lArc = node.P;
          rArc = node;
        } else if (dxr > -_Diagram__WEBPACK_IMPORTED_MODULE_4__[/* epsilon */ "f"]) {
          lArc = node;
          rArc = node.N;
        } else {
          lArc = rArc = node;
        }

        break;
      }
    }
  }

  Object(_Cell__WEBPACK_IMPORTED_MODULE_1__[/* createCell */ "c"])(site);
  var newArc = createBeach(site);
  _Diagram__WEBPACK_IMPORTED_MODULE_4__[/* beaches */ "a"].insert(lArc, newArc);
  if (!lArc && !rArc) return;

  if (lArc === rArc) {
    Object(_Circle__WEBPACK_IMPORTED_MODULE_2__[/* detachCircle */ "b"])(lArc);
    rArc = createBeach(lArc.site);
    _Diagram__WEBPACK_IMPORTED_MODULE_4__[/* beaches */ "a"].insert(newArc, rArc);
    newArc.edge = rArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__[/* createEdge */ "c"])(lArc.site, newArc.site);
    Object(_Circle__WEBPACK_IMPORTED_MODULE_2__[/* attachCircle */ "a"])(lArc);
    Object(_Circle__WEBPACK_IMPORTED_MODULE_2__[/* attachCircle */ "a"])(rArc);
    return;
  }

  if (!rArc) {
    // && lArc
    newArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__[/* createEdge */ "c"])(lArc.site, newArc.site);
    return;
  } // else lArc !== rArc


  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__[/* detachCircle */ "b"])(lArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__[/* detachCircle */ "b"])(rArc);
  var lSite = lArc.site,
      ax = lSite[0],
      ay = lSite[1],
      bx = site[0] - ax,
      by = site[1] - ay,
      rSite = rArc.site,
      cx = rSite[0] - ax,
      cy = rSite[1] - ay,
      d = 2 * (bx * cy - by * cx),
      hb = bx * bx + by * by,
      hc = cx * cx + cy * cy,
      vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];
  Object(_Edge__WEBPACK_IMPORTED_MODULE_3__[/* setEdgeEnd */ "d"])(rArc.edge, lSite, rSite, vertex);
  newArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__[/* createEdge */ "c"])(lSite, site, null, vertex);
  rArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__[/* createEdge */ "c"])(site, rSite, null, vertex);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__[/* attachCircle */ "a"])(lArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__[/* attachCircle */ "a"])(rArc);
}

function leftBreakPoint(arc, directrix) {
  var site = arc.site,
      rfocx = site[0],
      rfocy = site[1],
      pby2 = rfocy - directrix;
  if (!pby2) return rfocx;
  var lArc = arc.P;
  if (!lArc) return -Infinity;
  site = lArc.site;
  var lfocx = site[0],
      lfocy = site[1],
      plby2 = lfocy - directrix;
  if (!plby2) return lfocx;
  var hl = lfocx - rfocx,
      aby2 = 1 / pby2 - 1 / plby2,
      b = hl / plby2;
  if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
  return (rfocx + lfocx) / 2;
}

function rightBreakPoint(arc, directrix) {
  var rArc = arc.N;
  if (rArc) return leftBreakPoint(rArc, directrix);
  var site = arc.site;
  return site[1] === directrix ? site[0] : Infinity;
}

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatPrefix; });
/* unused harmony export default */
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(287);

var locale;
var format;
var formatPrefix;
defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});
function defaultLocale(definition) {
  locale = Object(_locale_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export days */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


var day = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
  date.setHours(0, 0, 0, 0);
}, function (date, step) {
  date.setDate(date.getDate() + step);
}, function (start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationMinute */ "c"]) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationDay */ "a"];
}, function (date) {
  return date.getDate() - 1;
});
/* harmony default export */ __webpack_exports__["a"] = (day);
var days = day.range;

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcDays */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


var utcDay = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
  date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function (start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationDay */ "a"];
}, function (date) {
  return date.getUTCDate() - 1;
});
/* harmony default export */ __webpack_exports__["a"] = (utcDay);
var utcDays = utcDay.range;

/***/ }),
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */
/***/ (function(module, exports) {

module.exports = Function('return this')();

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViewObjectsParser", function() { return DataViewObjectsParser; });
/* harmony import */ var _dataViewObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var DataViewObjectsParser =
/*#__PURE__*/
function () {
  function DataViewObjectsParser() {
    _classCallCheck(this, DataViewObjectsParser);
  }

  _createClass(DataViewObjectsParser, [{
    key: "getProperties",
    value: function getProperties() {
      var _this = this;

      var properties = {},
          objectNames = Object.keys(this);
      objectNames.forEach(function (objectName) {
        if (DataViewObjectsParser.isPropertyEnumerable(objectName)) {
          var propertyNames = Object.keys(_this[objectName]);
          properties[objectName] = {};
          propertyNames.forEach(function (propertyName) {
            if (DataViewObjectsParser.isPropertyEnumerable(objectName)) {
              properties[objectName][propertyName] = DataViewObjectsParser.createPropertyIdentifier(objectName, propertyName);
            }
          });
        }
      });
      return properties;
    }
  }], [{
    key: "getDefault",
    value: function getDefault() {
      return new this();
    }
  }, {
    key: "createPropertyIdentifier",
    value: function createPropertyIdentifier(objectName, propertyName) {
      return {
        objectName: objectName,
        propertyName: propertyName
      };
    }
  }, {
    key: "parse",
    value: function parse(dataView) {
      var dataViewObjectParser = this.getDefault(),
          properties;

      if (!dataView || !dataView.metadata || !dataView.metadata.objects) {
        return dataViewObjectParser;
      }

      properties = dataViewObjectParser.getProperties();

      for (var objectName in properties) {
        for (var propertyName in properties[objectName]) {
          var defaultValue = dataViewObjectParser[objectName][propertyName];
          dataViewObjectParser[objectName][propertyName] = _dataViewObjects__WEBPACK_IMPORTED_MODULE_0__[/* getCommonValue */ "a"](dataView.metadata.objects, properties[objectName][propertyName], defaultValue);
        }
      }

      return dataViewObjectParser;
    }
  }, {
    key: "isPropertyEnumerable",
    value: function isPropertyEnumerable(propertyName) {
      return !DataViewObjectsParser.InnumerablePropertyPrefix.test(propertyName);
    }
  }, {
    key: "enumerateObjectInstances",
    value: function enumerateObjectInstances(dataViewObjectParser, options) {
      var dataViewProperties = dataViewObjectParser && dataViewObjectParser[options.objectName];

      if (!dataViewProperties) {
        return [];
      }

      var instance = {
        objectName: options.objectName,
        selector: null,
        properties: {}
      };

      for (var key in dataViewProperties) {
        if (dataViewProperties.hasOwnProperty(key)) {
          instance.properties[key] = dataViewProperties[key];
        }
      }

      return {
        instances: [instance]
      };
    }
  }]);

  return DataViewObjectsParser;
}();
DataViewObjectsParser.InnumerablePropertyPrefix = /^_/;

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export name */
/* unused harmony export version */
/* unused harmony export description */
/* unused harmony export keywords */
/* unused harmony export homepage */
/* unused harmony export license */
/* unused harmony export author */
/* unused harmony export main */
/* unused harmony export unpkg */
/* unused harmony export jsdelivr */
/* unused harmony export module */
/* unused harmony export repository */
/* unused harmony export files */
/* unused harmony export scripts */
/* unused harmony export devDependencies */
/* unused harmony export dependencies */
var name = "d3";
var version = "5.15.0";
var description = "Data-Driven Documents";
var keywords = ["dom", "visualization", "svg", "animation", "canvas"];
var homepage = "https://d3js.org";
var license = "BSD-3-Clause";
var author = {
  "name": "Mike Bostock",
  "url": "https://bost.ocks.org/mike"
};
var main = "dist/d3.node.js";
var unpkg = "dist/d3.min.js";
var jsdelivr = "dist/d3.min.js";
var module = "index.js";
var repository = {
  "type": "git",
  "url": "https://github.com/d3/d3.git"
};
var files = ["dist/**/*.js", "index.js"];
var scripts = {
  "pretest": "rimraf dist && mkdir dist && json2module package.json > dist/package.js && rollup -c",
  "test": "tape 'test/**/*-test.js'",
  "prepublishOnly": "yarn test",
  "postpublish": "git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/dist/d3.js d3.v5.js && cp ../d3/dist/d3.min.js d3.v5.min.js && git add d3.v5.js d3.v5.min.js && git commit -m \"d3 ${npm_package_version}\" && git push && cd - && cd ../d3-bower && git pull && cp ../d3/LICENSE ../d3/README.md ../d3/dist/d3.js ../d3/dist/d3.min.js . && git add -- LICENSE README.md d3.js d3.min.js && git commit -m \"${npm_package_version}\" && git tag -am \"${npm_package_version}\" v${npm_package_version} && git push && git push --tags && cd - && zip -j dist/d3.zip -- LICENSE README.md API.md CHANGES.md dist/d3.js dist/d3.min.js"
};
var devDependencies = {
  "json2module": "0.0",
  "rimraf": "2",
  "rollup": "1",
  "rollup-plugin-ascii": "0.0",
  "rollup-plugin-node-resolve": "3",
  "rollup-plugin-terser": "5",
  "tape": "4"
};
var dependencies = {
  "d3-array": "1",
  "d3-axis": "1",
  "d3-brush": "1",
  "d3-chord": "1",
  "d3-collection": "1",
  "d3-color": "1",
  "d3-contour": "1",
  "d3-dispatch": "1",
  "d3-drag": "1",
  "d3-dsv": "1",
  "d3-ease": "1",
  "d3-fetch": "1",
  "d3-force": "1",
  "d3-format": "1",
  "d3-geo": "1",
  "d3-hierarchy": "1",
  "d3-interpolate": "1",
  "d3-path": "1",
  "d3-polygon": "1",
  "d3-quadtree": "1",
  "d3-random": "1",
  "d3-scale": "2",
  "d3-scale-chromatic": "1",
  "d3-selection": "1",
  "d3-shape": "1",
  "d3-time": "1",
  "d3-time-format": "2",
  "d3-timer": "1",
  "d3-transition": "1",
  "d3-voronoi": "1",
  "d3-zoom": "1"
};

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* unused harmony default export */ var _unused_webpack_default_export = (function (values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;
  if (reduce == null) reduce = _pairs__WEBPACK_IMPORTED_MODULE_0__[/* pair */ "a"];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(217);
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94);
/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51);
/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95);








/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var value = _identity__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
      domain = _extent__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
      threshold = _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1); // Convert number of thresholds into uniform thresholds.

    if (!Array.isArray(tz)) {
      tz = Object(_ticks__WEBPACK_IMPORTED_MODULE_6__[/* tickStep */ "c"])(x0, x1, tz);
      tz = Object(_range__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    } // Remove any thresholds outside the domain.


    var m = tz.length;

    while (tz[0] <= x0) {
      tz.shift(), --m;
    }

    while (tz[m - 1] > x1) {
      tz.pop(), --m;
    }

    var bins = new Array(m + 1),
        bin; // Initialize bins.

    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    } // Assign data to bins by value, ignoring any outside the domain.


    for (i = 0; i < n; ++i) {
      x = values[i];

      if (x0 <= x && x <= x1) {
        bins[Object(_bisect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function (_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_), histogram) : value;
  };

  histogram.domain = function (_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function (_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_array__WEBPACK_IMPORTED_MODULE_0__[/* slice */ "b"].call(_)) : Object(_constant__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_), histogram) : threshold;
  };

  return histogram;
});

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);




/* unused harmony default export */ var _unused_webpack_default_export = (function (values, min, max) {
  values = _array__WEBPACK_IMPORTED_MODULE_0__[/* map */ "a"].call(values, _number__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).sort(_ascending__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
  return Math.ceil((max - min) / (2 * (Object(_quantile__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(values, 0.75) - Object(_quantile__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);

/* unused harmony default export */ var _unused_webpack_default_export = (function (values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(_deviation__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(values) * Math.pow(values.length, -1 / 3)));
});

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) {
      // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;

        while (++i < n) {
          // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;

        while (++i < n) {
          // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

/* unused harmony default export */ var _unused_webpack_default_export = (function (values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(values[i]))) sum += value;else --m;
    }
  } else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(valueof(values[i], i, values)))) sum += value;else --m;
    }
  }

  if (m) return sum / m;
});

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);



/* unused harmony default export */ var _unused_webpack_default_export = (function (values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(values[i]))) {
        numbers.push(value);
      }
    }
  } else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(_quantile__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(numbers.sort(_ascending__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]), 0.5);
});

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) {
    j += arrays[i].length;
  }

  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;

    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (array, indexes) {
  var i = indexes.length,
      permutes = new Array(i);

  while (i--) {
    permutes[i] = array[indexes[i]];
  }

  return permutes;
});

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);

/* unused harmony default export */ var _unused_webpack_default_export = (function (values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];
  if (compare == null) compare = _ascending__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  } else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return Object(_transpose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arguments);
});

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _axis__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _axis__WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _brush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


var root = [null];
/* unused harmony default export */ var _unused_webpack_default_export = (function (node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";

    for (i in schedules) {
      if ((schedule = schedules[i]).state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_1__[/* SCHEDULED */ "c"] && schedule.name === name) {
        return new _transition_index_js__WEBPACK_IMPORTED_MODULE_0__[/* Transition */ "a"]([[node]], root, name, +i);
      }
    }
  }

  return null;
});

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _chord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _ribbon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(175);



/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



function compareValue(compare) {
  return function (a, b) {
    return compare(a.source.value + a.target.value, b.source.value + b.target.value);
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var padAngle = 0,
      sortGroups = null,
      sortSubgroups = null,
      sortChords = null;

  function chord(matrix) {
    var n = matrix.length,
        groupSums = [],
        groupIndex = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* range */ "g"])(n),
        subgroupIndex = [],
        chords = [],
        groups = chords.groups = new Array(n),
        subgroups = new Array(n * n),
        k,
        x,
        x0,
        dx,
        i,
        j; // Compute the sum.

    k = 0, i = -1;

    while (++i < n) {
      x = 0, j = -1;

      while (++j < n) {
        x += matrix[i][j];
      }

      groupSums.push(x);
      subgroupIndex.push(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* range */ "g"])(n));
      k += x;
    } // Sort groups…


    if (sortGroups) groupIndex.sort(function (a, b) {
      return sortGroups(groupSums[a], groupSums[b]);
    }); // Sort subgroups…

    if (sortSubgroups) subgroupIndex.forEach(function (d, i) {
      d.sort(function (a, b) {
        return sortSubgroups(matrix[i][a], matrix[i][b]);
      });
    }); // Convert the sum to scaling factor for [0, 2pi].
    // TODO Allow start and end angle to be specified?
    // TODO Allow padding to be specified as percentage?

    k = Object(_math__WEBPACK_IMPORTED_MODULE_1__[/* max */ "c"])(0, _math__WEBPACK_IMPORTED_MODULE_1__[/* tau */ "e"] - padAngle * n) / k;
    dx = k ? padAngle : _math__WEBPACK_IMPORTED_MODULE_1__[/* tau */ "e"] / n; // Compute the start and end angle for each group and subgroup.
    // Note: Opera has a bug reordering object literal properties!

    x = 0, i = -1;

    while (++i < n) {
      x0 = x, j = -1;

      while (++j < n) {
        var di = groupIndex[i],
            dj = subgroupIndex[di][j],
            v = matrix[di][dj],
            a0 = x,
            a1 = x += v * k;
        subgroups[dj * n + di] = {
          index: di,
          subindex: dj,
          startAngle: a0,
          endAngle: a1,
          value: v
        };
      }

      groups[di] = {
        index: di,
        startAngle: x0,
        endAngle: x,
        value: groupSums[di]
      };
      x += dx;
    } // Generate chords for each (non-empty) subgroup-subgroup link.


    i = -1;

    while (++i < n) {
      j = i - 1;

      while (++j < n) {
        var source = subgroups[j * n + i],
            target = subgroups[i * n + j];

        if (source.value || target.value) {
          chords.push(source.value < target.value ? {
            source: target,
            target: source
          } : {
            source: source,
            target: target
          });
        }
      }
    }

    return sortChords ? chords.sort(sortChords) : chords;
  }

  chord.padAngle = function (_) {
    return arguments.length ? (padAngle = Object(_math__WEBPACK_IMPORTED_MODULE_1__[/* max */ "c"])(0, _), chord) : padAngle;
  };

  chord.sortGroups = function (_) {
    return arguments.length ? (sortGroups = _, chord) : sortGroups;
  };

  chord.sortSubgroups = function (_) {
    return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
  };

  chord.sortChords = function (_) {
    return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
  };

  return chord;
});

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(117);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(295);





function defaultSource(d) {
  return d.source;
}

function defaultTarget(d) {
  return d.target;
}

function defaultRadius(d) {
  return d.radius;
}

function defaultStartAngle(d) {
  return d.startAngle;
}

function defaultEndAngle(d) {
  return d.endAngle;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var source = defaultSource,
      target = defaultTarget,
      radius = defaultRadius,
      startAngle = defaultStartAngle,
      endAngle = defaultEndAngle,
      context = null;

  function ribbon() {
    var buffer,
        argv = _array__WEBPACK_IMPORTED_MODULE_0__[/* slice */ "a"].call(arguments),
        s = source.apply(this, argv),
        t = target.apply(this, argv),
        sr = +radius.apply(this, (argv[0] = s, argv)),
        sa0 = startAngle.apply(this, argv) - _math__WEBPACK_IMPORTED_MODULE_2__[/* halfPi */ "b"],
        sa1 = endAngle.apply(this, argv) - _math__WEBPACK_IMPORTED_MODULE_2__[/* halfPi */ "b"],
        sx0 = sr * Object(_math__WEBPACK_IMPORTED_MODULE_2__[/* cos */ "a"])(sa0),
        sy0 = sr * Object(_math__WEBPACK_IMPORTED_MODULE_2__[/* sin */ "d"])(sa0),
        tr = +radius.apply(this, (argv[0] = t, argv)),
        ta0 = startAngle.apply(this, argv) - _math__WEBPACK_IMPORTED_MODULE_2__[/* halfPi */ "b"],
        ta1 = endAngle.apply(this, argv) - _math__WEBPACK_IMPORTED_MODULE_2__[/* halfPi */ "b"];
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
    context.moveTo(sx0, sy0);
    context.arc(0, 0, sr, sa0, sa1);

    if (sa0 !== ta0 || sa1 !== ta1) {
      // TODO sr !== tr?
      context.quadraticCurveTo(0, 0, tr * Object(_math__WEBPACK_IMPORTED_MODULE_2__[/* cos */ "a"])(ta0), tr * Object(_math__WEBPACK_IMPORTED_MODULE_2__[/* sin */ "d"])(ta0));
      context.arc(0, 0, tr, ta0, ta1);
    }

    context.quadraticCurveTo(0, 0, sx0, sy0);
    context.closePath();
    if (buffer) return context = null, buffer + "" || null;
  }

  ribbon.radius = function (_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(+_), ribbon) : radius;
  };

  ribbon.startAngle = function (_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(+_), ribbon) : startAngle;
  };

  ribbon.endAngle = function (_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(+_), ribbon) : endAngle;
  };

  ribbon.source = function (_) {
    return arguments.length ? (source = _, ribbon) : source;
  };

  ribbon.target = function (_) {
    return arguments.length ? (target = _, ribbon) : target;
  };

  ribbon.context = function (_) {
    return arguments.length ? (context = _ == null ? null : _, ribbon) : context;
  };

  return ribbon;
});

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var keys = [],
      _sortKeys = [],
      _sortValues,
      _rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (_sortValues != null) array.sort(_sortValues);
      return _rollup != null ? _rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = Object(_map__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function (values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });
    return result;
  }

  function _entries(map, depth) {
    if (++depth > keys.length) return map;
    var array,
        sortKey = _sortKeys[depth - 1];
    if (_rollup != null && depth >= keys.length) array = map.entries();else array = [], map.each(function (v, k) {
      array.push({
        key: k,
        values: _entries(v, depth)
      });
    });
    return sortKey != null ? array.sort(function (a, b) {
      return sortKey(a.key, b.key);
    }) : array;
  }

  return nest = {
    object: function object(array) {
      return apply(array, 0, createObject, setObject);
    },
    map: function map(array) {
      return apply(array, 0, createMap, setMap);
    },
    entries: function entries(array) {
      return _entries(apply(array, 0, createMap, setMap), 0);
    },
    key: function key(d) {
      keys.push(d);
      return nest;
    },
    sortKeys: function sortKeys(order) {
      _sortKeys[keys.length - 1] = order;
      return nest;
    },
    sortValues: function sortValues(order) {
      _sortValues = order;
      return nest;
    },
    rollup: function rollup(f) {
      _rollup = f;
      return nest;
    }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return Object(_map__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();
}

function setMap(map, key, value) {
  map.set(key, value);
}

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);


function Set() {}

var proto = _map__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].prototype;
Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function add(value) {
    value += "";
    this[_map__WEBPACK_IMPORTED_MODULE_0__[/* prefix */ "b"] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set(); // Copy constructor.

  if (object instanceof Set) object.each(function (value) {
    set.add(value);
  }); // Otherwise, assume it’s an array.
  else if (object) {
      var i = -1,
          n = object.length;
      if (f == null) while (++i < n) {
        set.add(object[i]);
      } else while (++i < n) {
        set.add(f(object[i], i, object));
      }
    }
  return set;
}

/* unused harmony default export */ var _unused_webpack_default_export = (set);

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (map) {
  var keys = [];

  for (var key in map) {
    keys.push(key);
  }

  return keys;
});

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (map) {
  var values = [];

  for (var key in map) {
    values.push(map[key]);
  }

  return values;
});

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (map) {
  var entries = [];

  for (var key in map) {
    entries.push({
      key: key,
      value: map[key]
    });
  }

  return entries;
});

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _contours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _density__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(182);



/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(110);
/* harmony import */ var _blur__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _contours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99);






function defaultX(d) {
  return d[0];
}

function defaultY(d) {
  return d[1];
}

function defaultWeight() {
  return 1;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var x = defaultX,
      y = defaultY,
      weight = defaultWeight,
      dx = 960,
      dy = 500,
      r = 20,
      // blur radius
  k = 2,
      // log2(grid cell size)
  o = r * 3,
      // grid offset, to pad for blur
  n = dx + o * 2 >> k,
      // grid width
  m = dy + o * 2 >> k,
      // grid height
  threshold = Object(_constant__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(20);

  function density(data) {
    var values0 = new Float32Array(n * m),
        values1 = new Float32Array(n * m);
    data.forEach(function (d, i, data) {
      var xi = +x(d, i, data) + o >> k,
          yi = +y(d, i, data) + o >> k,
          wi = +weight(d, i, data);

      if (xi >= 0 && xi < n && yi >= 0 && yi < m) {
        values0[xi + yi * n] += wi;
      }
    }); // TODO Optimize.

    Object(_blur__WEBPACK_IMPORTED_MODULE_2__[/* blurX */ "a"])({
      width: n,
      height: m,
      data: values0
    }, {
      width: n,
      height: m,
      data: values1
    }, r >> k);
    Object(_blur__WEBPACK_IMPORTED_MODULE_2__[/* blurY */ "b"])({
      width: n,
      height: m,
      data: values1
    }, {
      width: n,
      height: m,
      data: values0
    }, r >> k);
    Object(_blur__WEBPACK_IMPORTED_MODULE_2__[/* blurX */ "a"])({
      width: n,
      height: m,
      data: values0
    }, {
      width: n,
      height: m,
      data: values1
    }, r >> k);
    Object(_blur__WEBPACK_IMPORTED_MODULE_2__[/* blurY */ "b"])({
      width: n,
      height: m,
      data: values1
    }, {
      width: n,
      height: m,
      data: values0
    }, r >> k);
    Object(_blur__WEBPACK_IMPORTED_MODULE_2__[/* blurX */ "a"])({
      width: n,
      height: m,
      data: values0
    }, {
      width: n,
      height: m,
      data: values1
    }, r >> k);
    Object(_blur__WEBPACK_IMPORTED_MODULE_2__[/* blurY */ "b"])({
      width: n,
      height: m,
      data: values1
    }, {
      width: n,
      height: m,
      data: values0
    }, r >> k);
    var tz = threshold(values0); // Convert number of thresholds into uniform thresholds.

    if (!Array.isArray(tz)) {
      var stop = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* max */ "e"])(values0);
      tz = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* tickStep */ "j"])(0, stop, tz);
      tz = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* range */ "g"])(0, Math.floor(stop / tz) * tz, tz);
      tz.shift();
    }

    return Object(_contours__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])().thresholds(tz).size([n, m])(values0).map(transform);
  }

  function transform(geometry) {
    geometry.value *= Math.pow(2, -2 * k); // Density in points per square pixel.

    geometry.coordinates.forEach(transformPolygon);
    return geometry;
  }

  function transformPolygon(coordinates) {
    coordinates.forEach(transformRing);
  }

  function transformRing(coordinates) {
    coordinates.forEach(transformPoint);
  } // TODO Optimize.


  function transformPoint(coordinates) {
    coordinates[0] = coordinates[0] * Math.pow(2, k) - o;
    coordinates[1] = coordinates[1] * Math.pow(2, k) - o;
  }

  function resize() {
    o = r * 3;
    n = dx + o * 2 >> k;
    m = dy + o * 2 >> k;
    return density;
  }

  density.x = function (_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(+_), density) : x;
  };

  density.y = function (_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(+_), density) : y;
  };

  density.weight = function (_) {
    return arguments.length ? (weight = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(+_), density) : weight;
  };

  density.size = function (_) {
    if (!arguments.length) return [dx, dy];

    var _0 = Math.ceil(_[0]),
        _1 = Math.ceil(_[1]);

    if (!(_0 >= 0) && !(_0 >= 0)) throw new Error("invalid size");
    return dx = _0, dy = _1, resize();
  };

  density.cellSize = function (_) {
    if (!arguments.length) return 1 << k;
    if (!((_ = +_) >= 1)) throw new Error("invalid cell size");
    return k = Math.floor(Math.log(_) / Math.LN2), resize();
  };

  density.thresholds = function (_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_array__WEBPACK_IMPORTED_MODULE_1__[/* slice */ "a"].call(_)) : Object(_constant__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_), density) : threshold;
  };

  density.bandwidth = function (_) {
    if (!arguments.length) return Math.sqrt(r * (r + 1));
    if (!((_ = +_) >= 0)) throw new Error("invalid bandwidth");
    return r = Math.round((Math.sqrt(4 * _ * _ + 1) - 1) / 2), resize();
  };

  return density;
});

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _blob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
/* harmony import */ var _dsv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(187);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
/* harmony import */ var _xml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86);








/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function responseBlob(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.blob();
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (input, init) {
  return fetch(input, init).then(responseBlob);
});

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function responseArrayBuffer(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.arrayBuffer();
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (input, init) {
  return fetch(input, init).then(responseArrayBuffer);
});

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (input, init) {
  return new Promise(function (resolve, reject) {
    var image = new Image();

    for (var key in init) {
      image[key] = init[key];
    }

    image.onerror = reject;

    image.onload = function () {
      resolve(image);
    };

    image.src = input;
  });
});

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function responseJson(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.json();
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (input, init) {
  return fetch(input, init).then(responseJson);
});

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _center__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _collide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(190);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(191);
/* harmony import */ var _manyBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(192);
/* harmony import */ var _radial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(193);
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73);
/* harmony import */ var _x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(194);
/* harmony import */ var _y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(195);









/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (x, y) {
  var nodes;
  if (x == null) x = 0;
  if (y == null) y = 0;

  function force() {
    var i,
        n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }

    for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }

  force.initialize = function (_) {
    nodes = _;
  };

  force.x = function (_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function (_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
});

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _jiggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(296);




function x(d) {
  return d.x + d.vx;
}

function y(d) {
  return d.y + d.vy;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (radius) {
  var nodes,
      radii,
      strength = 1,
      iterations = 1;
  if (typeof radius !== "function") radius = Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(radius == null ? 1 : +radius);

  function force() {
    var i,
        n = nodes.length,
        tree,
        node,
        xi,
        yi,
        ri,
        ri2;

    for (var k = 0; k < iterations; ++k) {
      tree = Object(d3_quadtree__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nodes, x, y).visitAfter(prepare);

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data,
          rj = quad.r,
          r = ri + rj;

      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
              y = yi - data.y - data.vy,
              l = x * x + y * y;

          if (l < r * r) {
            if (x === 0) x = Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(), l += x * x;
            if (y === 0) y = Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(), l += y * y;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }

        return;
      }

      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }

  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];

    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length,
        node;
    radii = new Array(n);

    for (i = 0; i < n; ++i) {
      node = nodes[i], radii[node.index] = +radius(node, i, nodes);
    }
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  force.iterations = function (_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function (_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.radius = function (_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+_), initialize(), force) : radius;
  };

  return force;
});

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _jiggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





function index(d) {
  return d.index;
}

function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("missing: " + nodeId);
  return node;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function (links) {
  var id = index,
      strength = defaultStrength,
      strengths,
      distance = Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(30),
      distances,
      nodes,
      count,
      bias,
      iterations = 1;
  if (links == null) links = [];

  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }

  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x = target.x + target.vx - source.x - source.vx || Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
        y = target.y + target.vy - source.y - source.vy || Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
        l = Math.sqrt(x * x + y * y);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x *= l, y *= l;
        target.vx -= x * (b = bias[i]);
        target.vy -= y * b;
        source.vx += x * (b = 1 - b);
        source.vy += y * b;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length,
        m = links.length,
        nodeById = Object(d3_collection__WEBPACK_IMPORTED_MODULE_2__[/* map */ "a"])(nodes, id),
        link;

    for (i = 0, count = new Array(n); i < m; ++i) {
      link = links[i], link.index = i;
      if (_typeof(link.source) !== "object") link.source = find(nodeById, link.source);
      if (_typeof(link.target) !== "object") link.target = find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }

    for (i = 0, bias = new Array(m); i < m; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }

    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }

  function initializeStrength() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }

  function initializeDistance() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  force.links = function (_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };

  force.id = function (_) {
    return arguments.length ? (id = _, force) : id;
  };

  force.iterations = function (_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+_), initializeStrength(), force) : strength;
  };

  force.distance = function (_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+_), initializeDistance(), force) : distance;
  };

  return force;
});

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _jiggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(296);
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73);




/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var nodes,
      node,
      alpha,
      strength = Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(-30),
      strengths,
      distanceMin2 = 1,
      distanceMax2 = Infinity,
      theta2 = 0.81;

  function force(_) {
    var i,
        n = nodes.length,
        tree = Object(d3_quadtree__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nodes, _simulation__WEBPACK_IMPORTED_MODULE_3__[/* x */ "a"], _simulation__WEBPACK_IMPORTED_MODULE_3__[/* y */ "b"]).visitAfter(accumulate);

    for (alpha = _, i = 0; i < n; ++i) {
      node = nodes[i], tree.visit(apply);
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length,
        node;
    strengths = new Array(n);

    for (i = 0; i < n; ++i) {
      node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
    }
  }

  function accumulate(quad) {
    var strength = 0,
        q,
        c,
        weight = 0,
        x,
        y,
        i; // For internal nodes, accumulate forces from child quadrants.

    if (quad.length) {
      for (x = y = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c = Math.abs(q.value))) {
          strength += q.value, weight += c, x += c * q.x, y += c * q.y;
        }
      }

      quad.x = x / weight;
      quad.y = y / weight;
    } // For leaf nodes, accumulate forces from coincident quadrants.
    else {
        q = quad;
        q.x = q.data.x;
        q.y = q.data.y;

        do {
          strength += strengths[q.data.index];
        } while (q = q.next);
      }

    quad.value = strength;
  }

  function apply(quad, x1, _, x2) {
    if (!quad.value) return true;
    var x = quad.x - node.x,
        y = quad.y - node.y,
        w = x2 - x1,
        l = x * x + y * y; // Apply the Barnes-Hut approximation if possible.
    // Limit forces for very close nodes; randomize direction if coincident.

    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x === 0) x = Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(), l += x * x;
        if (y === 0) y = Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(), l += y * y;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x * quad.value * alpha / l;
        node.vy += y * quad.value * alpha / l;
      }

      return true;
    } // Otherwise, process points directly.
    else if (quad.length || l >= distanceMax2) return; // Limit forces for very close nodes; randomize direction if coincident.


    if (quad.data !== node || quad.next) {
      if (x === 0) x = Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(), l += x * x;
      if (y === 0) y = Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(), l += y * y;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }

    do {
      if (quad.data !== node) {
        w = strengths[quad.data.index] * alpha / l;
        node.vx += x * w;
        node.vy += y * w;
      }
    } while (quad = quad.next);
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+_), initialize(), force) : strength;
  };

  force.distanceMin = function (_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };

  force.distanceMax = function (_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };

  force.theta = function (_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };

  return force;
});

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

/* unused harmony default export */ var _unused_webpack_default_export = (function (radius, x, y) {
  var nodes,
      strength = Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(0.1),
      strengths,
      radiuses;
  if (typeof radius !== "function") radius = Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+radius);
  if (x == null) x = 0;
  if (y == null) y = 0;

  function force(alpha) {
    for (var i = 0, n = nodes.length; i < n; ++i) {
      var node = nodes[i],
          dx = node.x - x || 1e-6,
          dy = node.y - y || 1e-6,
          r = Math.sqrt(dx * dx + dy * dy),
          k = (radiuses[i] - r) * strengths[i] * alpha / r;
      node.vx += dx * k;
      node.vy += dy * k;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length;
    strengths = new Array(n);
    radiuses = new Array(n);

    for (i = 0; i < n; ++i) {
      radiuses[i] = +radius(nodes[i], i, nodes);
      strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function (_) {
    nodes = _, initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+_), initialize(), force) : strength;
  };

  force.radius = function (_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+_), initialize(), force) : radius;
  };

  force.x = function (_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function (_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
});

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

/* unused harmony default export */ var _unused_webpack_default_export = (function (x) {
  var strength = Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(0.1),
      nodes,
      strengths,
      xz;
  if (typeof x !== "function") x = Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(x == null ? 0 : +x);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);

    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+_), initialize(), force) : strength;
  };

  force.x = function (_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+_), initialize(), force) : x;
  };

  return force;
});

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

/* unused harmony default export */ var _unused_webpack_default_export = (function (y) {
  var strength = Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(0.1),
      nodes,
      strengths,
      yz;
  if (typeof y !== "function") y = Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(y == null ? 0 : +y);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);

    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+_), initialize(), force) : strength;
  };

  force.y = function (_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+_), initialize(), force) : y;
  };

  return force;
});

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _uniform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197);
/* harmony import */ var _normal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(100);
/* harmony import */ var _logNormal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(198);
/* harmony import */ var _bates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(199);
/* harmony import */ var _irwinHall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(101);
/* harmony import */ var _exponential__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(200);







/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _defaultSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);

/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomUniform(source) {
  function randomUniform(min, max) {
    min = min == null ? 0 : +min;
    max = max == null ? 1 : +max;
    if (arguments.length === 1) max = min, min = 0;else max -= min;
    return function () {
      return source() * max + min;
    };
  }

  randomUniform.source = sourceRandomUniform;
  return randomUniform;
})(_defaultSource__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]));

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _defaultSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _normal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(100);


/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomLogNormal(source) {
  function randomLogNormal() {
    var randomNormal = _normal__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].source(source).apply(this, arguments);
    return function () {
      return Math.exp(randomNormal());
    };
  }

  randomLogNormal.source = sourceRandomLogNormal;
  return randomLogNormal;
})(_defaultSource__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]));

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _defaultSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _irwinHall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(101);


/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomBates(source) {
  function randomBates(n) {
    var randomIrwinHall = _irwinHall__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].source(source)(n);
    return function () {
      return randomIrwinHall() / n;
    };
  }

  randomBates.source = sourceRandomBates;
  return randomBates;
})(_defaultSource__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]));

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _defaultSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);

/* unused harmony default export */ var _unused_webpack_default_export = ((function sourceRandomExponential(source) {
  function randomExponential(lambda) {
    return function () {
      return -Math.log(1 - source()) / lambda;
    };
  }

  randomExponential.source = sourceRandomExponential;
  return randomExponential;
})(_defaultSource__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]));

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _band__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(202);
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _linear__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var _symlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56);
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70);
/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(203);
/* harmony import */ var _quantize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(204);
/* harmony import */ var _threshold__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(205);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(103);
/* harmony import */ var _utcTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(206);
/* harmony import */ var _sequential__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24);
/* harmony import */ var _sequentialQuantile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(207);
/* harmony import */ var _diverging__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49);
/* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(102);

















/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);



function identity(domain) {
  var unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function (_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_0__[/* map */ "a"].call(_, _number__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]), scale) : domain.slice();
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function () {
    return identity(domain).unknown(unknown);
  };

  domain = arguments.length ? _array__WEBPACK_IMPORTED_MODULE_0__[/* map */ "a"].call(domain, _number__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]) : [0, 1];
  return Object(_linear__WEBPACK_IMPORTED_MODULE_1__[/* linearish */ "b"])(scale);
}

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



function quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0,
        n = Math.max(1, range.length);
    thresholds = new Array(n - 1);

    while (++i < n) {
      thresholds[i - 1] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* quantile */ "f"])(domain, i / n);
    }

    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* bisect */ "b"])(thresholds, x)];
  }

  scale.invertExtent = function (y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [i > 0 ? thresholds[i - 1] : domain[0], i < thresholds.length ? thresholds[i] : domain[domain.length - 1]];
  };

  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [];

    for (var i = 0, n = _.length, d; i < n; ++i) {
      if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    }

    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* ascending */ "a"]);
    return rescale();
  };

  scale.range = function (_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__[/* slice */ "b"].call(_), rescale()) : range.slice();
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function () {
    return thresholds.slice();
  };

  scale.copy = function () {
    return quantile().domain(domain).range(range).unknown(unknown);
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__[/* initRange */ "b"].apply(scale, arguments);
}

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* bisect */ "b"])(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);

    while (++i < n) {
      domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    }

    return scale;
  }

  scale.domain = function (_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function (_) {
    return arguments.length ? (n = (range = _array__WEBPACK_IMPORTED_MODULE_1__[/* slice */ "b"].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function (y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : i < 1 ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]];
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function () {
    return domain.slice();
  };

  scale.copy = function () {
    return quantize().domain([x0, x1]).range(range).unknown(unknown);
  };

  return _init__WEBPACK_IMPORTED_MODULE_3__[/* initRange */ "b"].apply(Object(_linear__WEBPACK_IMPORTED_MODULE_2__[/* linearish */ "b"])(scale), arguments);
}

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* bisect */ "b"])(domain, x, 0, n)] : unknown;
  }

  scale.domain = function (_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_1__[/* slice */ "b"].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function (_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__[/* slice */ "b"].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function (y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function () {
    return threshold().domain(domain).range(range).unknown(unknown);
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__[/* initRange */ "b"].apply(scale, arguments);
}

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(299);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(360);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(146);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(361);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(362);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(297);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(298);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4);




/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return _init__WEBPACK_IMPORTED_MODULE_10__[/* initRange */ "b"].apply(Object(_time__WEBPACK_IMPORTED_MODULE_0__[/* calendar */ "a"])(d3_time__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], d3_time__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], d3_time__WEBPACK_IMPORTED_MODULE_4__[/* utcSunday */ "b"], d3_time__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], d3_time__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], d3_time__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], d3_time__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], d3_time__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__[/* utcFormat */ "b"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
});

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



function sequentialQuantile() {
  var domain = [],
      interpolator = _continuous__WEBPACK_IMPORTED_MODULE_1__[/* identity */ "c"];

  function scale(x) {
    if (!isNaN(x = +x)) return interpolator((Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* bisect */ "b"])(domain, x) - 1) / (domain.length - 1));
  }

  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    domain = [];

    for (var i = 0, n = _.length, d; i < n; ++i) {
      if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    }

    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__[/* ascending */ "a"]);
    return scale;
  };

  scale.interpolator = function (_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function () {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__[/* initInterpolator */ "a"].apply(scale, arguments);
}

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(209);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _line_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _curve_basis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(210);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _curve_basis_js__WEBPACK_IMPORTED_MODULE_1__["a"]; });





 // Note: radialArea is deprecated!

 // Note: radialLine is deprecated!







































/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(295);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
/* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(140);




/* harmony default export */ __webpack_exports__["a"] = (function () {
  var x = _point_js__WEBPACK_IMPORTED_MODULE_3__[/* x */ "a"],
      y = _point_js__WEBPACK_IMPORTED_MODULE_3__[/* y */ "b"],
      defined = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(true),
      context = null,
      curve = _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;
    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();else output.lineEnd();
      }

      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function (_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(+_), line) : x;
  };

  line.y = function (_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(+_), line) : y;
  };

  line.defined = function (_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(!!_), line) : defined;
  };

  line.curve = function (_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function (_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export point */
/* unused harmony export Basis */
function _point(that, x, y) {
  that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
}


function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function areaStart() {
    this._line = 0;
  },
  areaEnd: function areaEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    switch (this._point) {
      case 3:
        _point(this, this._x1, this._y1);

      // proceed

      case 2:
        this._context.lineTo(this._x1, this._y1);

        break;
    }

    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function point(x, y) {
    x = +x, y = +y;

    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;

      case 1:
        this._point = 2;
        break;

      case 2:
        this._point = 3;

        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);

      // proceed

      default:
        _point(this, x, y);

        break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (function (context) {
  return new Basis(context);
});

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _voronoi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);


/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(142);
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);



/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var x = _point__WEBPACK_IMPORTED_MODULE_1__[/* x */ "a"],
      y = _point__WEBPACK_IMPORTED_MODULE_1__[/* y */ "b"],
      extent = null;

  function voronoi(data) {
    return new _Diagram__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"](data.map(function (d, i) {
      var s = [Math.round(x(d, i, data) / _Diagram__WEBPACK_IMPORTED_MODULE_2__[/* epsilon */ "f"]) * _Diagram__WEBPACK_IMPORTED_MODULE_2__[/* epsilon */ "f"], Math.round(y(d, i, data) / _Diagram__WEBPACK_IMPORTED_MODULE_2__[/* epsilon */ "f"]) * _Diagram__WEBPACK_IMPORTED_MODULE_2__[/* epsilon */ "f"]];
      s.index = i;
      s.data = d;
      return s;
    }), extent);
  }

  voronoi.polygons = function (data) {
    return voronoi(data).polygons();
  };

  voronoi.links = function (data) {
    return voronoi(data).links();
  };

  voronoi.triangles = function (data) {
    return voronoi(data).triangles();
  };

  voronoi.x = function (_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+_), voronoi) : x;
  };

  voronoi.y = function (_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(+_), voronoi) : y;
  };

  voronoi.extent = function (_) {
    return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
  };

  voronoi.size = function (_) {
    return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
  };

  return voronoi;
});

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);



/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(120);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(363);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75);
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81);
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(292);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30);
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33);








 // Ignore right-click, since that should open the context menu.

function defaultFilter() {
  return !d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].ctrlKey && !d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].button;
}

function defaultExtent() {
  var e = this;

  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;

    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }

    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }

  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || _transform_js__WEBPACK_IMPORTED_MODULE_10__[/* identity */ "b"];
}

function defaultWheelDelta() {
  return -d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].deltaY * (d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].deltaMode === 1 ? 0.05 : d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].deltaMode ? 1 : 0.002);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
      listeners = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("start", "zoom", "end"),
      touchstarting,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0;

  function zoom(selection) {
    selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function (collection, transform, point) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);

    if (collection !== selection) {
      schedule(collection, transform, point);
    } else {
      selection.interrupt().each(function () {
        gesture(this, arguments).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
      });
    }
  };

  zoom.scaleBy = function (selection, k, p) {
    zoom.scaleTo(selection, function () {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p);
  };

  zoom.scaleTo = function (selection, k, p) {
    zoom.transform(selection, function () {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p);
  };

  zoom.translateBy = function (selection, x, y) {
    zoom.transform(selection, function () {
      return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
    });
  };

  zoom.translateTo = function (selection, x, y, p) {
    zoom.transform(selection, function () {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(_transform_js__WEBPACK_IMPORTED_MODULE_10__[/* identity */ "b"].translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
    }, p);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new _transform_js__WEBPACK_IMPORTED_MODULE_10__[/* Transform */ "a"](k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k,
        y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new _transform_js__WEBPACK_IMPORTED_MODULE_10__[/* Transform */ "a"](transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point) {
    transition.on("start.zoom", function () {
      gesture(this, arguments).start();
    }).on("interrupt.zoom end.zoom", function () {
      gesture(this, arguments).end();
    }).tween("zoom", function () {
      var that = this,
          args = arguments,
          g = gesture(that, args),
          e = extent.apply(that, args),
          p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
          w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
          a = that.__zoom,
          b = typeof transform === "function" ? transform.apply(that, args) : transform,
          i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function (t) {
        if (t === 1) t = b; // Avoid rounding error on end.
        else {
            var l = i(t),
                k = w / l[2];
            t = new _transform_js__WEBPACK_IMPORTED_MODULE_10__[/* Transform */ "a"](k, p[0] - l[0] * k, p[1] - l[1] * k);
          }
        g.zoom(null, t);
      };
    });
  }

  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    start: function start() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }

      return this;
    },
    zoom: function zoom(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function end() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }

      return this;
    },
    emit: function emit(type) {
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* customEvent */ "a"])(new _event_js__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"](zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };

  function wheeled() {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this); // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.

    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }

      clearTimeout(g.wheel);
    } // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return; // Otherwise, capture the mouse point and location at the start.
      else {
          g.mouse = [p, t.invert(p)];
          Object(d3_transition__WEBPACK_IMPORTED_MODULE_7__[/* interrupt */ "a"])(this);
          g.start();
        }

    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])();
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var g = gesture(this, arguments, true),
        v = Object(d3_selection__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this),
        x0 = d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].clientX,
        y0 = d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].clientY;
    Object(d3_drag__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].view);
    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_11__[/* nopropagation */ "b"])();
    g.mouse = [p, this.__zoom.invert(p)];
    Object(d3_transition__WEBPACK_IMPORTED_MODULE_7__[/* interrupt */ "a"])(this);
    g.start();

    function mousemoved() {
      Object(_noevent_js__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])();

      if (!g.moved) {
        var dx = d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].clientX - x0,
            dy = d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }

      g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = Object(d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(g.that), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped() {
      v.on("mousemove.zoom mouseup.zoom", null);
      Object(d3_drag__WEBPACK_IMPORTED_MODULE_1__[/* yesdrag */ "b"])(d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].view, g.moved);
      Object(_noevent_js__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])();
      g.end();
    }
  }

  function dblclicked() {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this),
        p1 = t0.invert(p0),
        k1 = t0.k * (d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments), translateExtent);
    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])();
    if (duration > 0) Object(d3_selection__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).transition().duration(duration).call(schedule, t1, p0);else Object(d3_selection__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).call(zoom.transform, t1);
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var touches = d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].touches,
        n = touches.length,
        g = gesture(this, arguments, d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].changedTouches.length === n),
        started,
        i,
        t,
        p;
    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_11__[/* nopropagation */ "b"])();

    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, touches, t.identifier);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchstarting = setTimeout(function () {
        touchstarting = null;
      }, touchDelay);
      Object(d3_transition__WEBPACK_IMPORTED_MODULE_7__[/* interrupt */ "a"])(this);
      g.start();
    }
  }

  function touchmoved() {
    if (!this.__zooming) return;
    var g = gesture(this, arguments),
        touches = d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].changedTouches,
        n = touches.length,
        i,
        t,
        p,
        l;
    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])();
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    g.taps = 0;

    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, touches, t.identifier);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }

    t = g.that.__zoom;

    if (g.touch1) {
      var p0 = g.touch0[0],
          l0 = g.touch0[1],
          p1 = g.touch1[0],
          l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended() {
    if (!this.__zooming) return;
    var g = gesture(this, arguments),
        touches = d3_selection__WEBPACK_IMPORTED_MODULE_3__[/* event */ "c"].changedTouches,
        n = touches.length,
        i,
        t;
    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_11__[/* nopropagation */ "b"])();
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function () {
      touchending = null;
    }, touchDelay);

    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }

    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);else {
      g.end(); // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.

      if (g.taps === 2) {
        var p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).on("dblclick.zoom");
        if (p) p.apply(this, arguments);
      }
    }
  }

  zoom.wheelDelta = function (_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(+_), zoom) : wheelDelta;
  };

  zoom.filter = function (_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(!!_), zoom) : filter;
  };

  zoom.touchable = function (_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(!!_), zoom) : touchable;
  };

  zoom.extent = function (_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function (_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function (_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function (_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function (_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function (_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function () {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function (_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  return zoom;
});

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _dataViewObjectsParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _dataViewObjectsParser__WEBPACK_IMPORTED_MODULE_0__; });









/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChart; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


;
;
var LineChart =
/*#__PURE__*/
function () {
  function LineChart() {
    _classCallCheck(this, LineChart);

    this.margin = {
      top: 25,
      right: 25,
      bottom: 25,
      left: 25
    };
  }

  _createClass(LineChart, [{
    key: "construct",
    value: function construct(host, selection, options) {
      this.host = host;
      this.selection = selection; // Add root svg element.

      this.svg = d3__WEBPACK_IMPORTED_MODULE_0__[/* select */ "h"](options.element).append("svg").classed("svg", true); // Add chart and axes containers.

      this.chartContainer = this.svg.append("g").classed("container", true);
      this.xAxisContainer = this.chartContainer.append("g").classed("container", true);
      this.yAxisContainer = this.chartContainer.append("g").classed("container", true);
    }
  }, {
    key: "update",
    value: function update(settings, options) {
      // Load data and settings.
      this.settings = settings;
      var viewModel = this.getViewModel(options.dataViews);
      var data = viewModel.lines[0].points; // Calculate dimensions.

      var width = options.viewport.width;
      var height = options.viewport.height;
      var innerWidth = width - this.margin.left - this.margin.right;
      var innerHeight = height - this.margin.top - this.margin.bottom;
      this.svg.attr("width", width).attr("height", height);
      this.chartContainer.attr("transform", "translate(".concat(this.margin.left, ", ").concat(this.margin.top, ")"));
      var xScale = d3__WEBPACK_IMPORTED_MODULE_0__[/* scaleLinear */ "g"]().domain(d3__WEBPACK_IMPORTED_MODULE_0__[/* extent */ "d"](data, function (d) {
        return d.date;
      })).range([0, innerWidth]).nice();
      var yScale = d3__WEBPACK_IMPORTED_MODULE_0__[/* scaleLinear */ "g"]().domain(d3__WEBPACK_IMPORTED_MODULE_0__[/* extent */ "d"](data, function (d) {
        return d.value;
      })).range([innerHeight, 0]).nice();
      var xAxis = d3__WEBPACK_IMPORTED_MODULE_0__[/* axisBottom */ "a"](xScale).tickSize(-innerHeight).tickPadding(5);
      var yAxis = d3__WEBPACK_IMPORTED_MODULE_0__[/* axisLeft */ "b"](yScale).tickSize(-innerWidth).tickPadding(5);
      this.xAxisContainer.call(xAxis).attr("transform", "translate(0, ".concat(innerHeight, ")")).selectAll(".domain").remove();
      this.yAxisContainer.call(yAxis).selectAll(".domain").remove();
      var lineGen = d3__WEBPACK_IMPORTED_MODULE_0__[/* line */ "e"]().x(function (d) {
        return xScale(d[0]);
      }).y(function (d) {
        return yScale(d[1]);
      }).curve(d3__WEBPACK_IMPORTED_MODULE_0__[/* curveBasis */ "c"]);
      this.chartContainer.append("path").attr("d", lineGen(data.map(function (d) {
        return [d.date, d.value];
      }))).classed("line-path", true);
    }
  }, {
    key: "getViewModel",
    value: function getViewModel(dataViews) {
      var viewModel = {
        lines: [],
        count: dataViews[0].categorical.values.length,
        maxValue: 0
      };

      if (!dataViews || !dataViews[0] || !dataViews[0].categorical || !dataViews[0].categorical.categories || !dataViews[0].categorical.values) {
        return viewModel;
      }

      var view = dataViews[0].categorical;
      var categories = view.categories[0];

      for (var i = 0; i < viewModel.count; i++) {
        var values = view.values[i];
        viewModel.lines.push({
          points: [],
          maxValue: 0
        });

        for (var j = 0; j < values.values.length; j++) {
          viewModel.lines[i].points.push({
            date: categories.values[j],
            value: values.values[j]
          });
        }

        viewModel.lines[i].maxValue = d3__WEBPACK_IMPORTED_MODULE_0__[/* max */ "f"](viewModel.lines[i].points, function (d) {
          return d.value;
        });
      }

      viewModel.maxValue = d3__WEBPACK_IMPORTED_MODULE_0__[/* max */ "f"](viewModel.lines, function (d) {
        return d.maxValue;
      });
      return viewModel;
    }
  }]);

  return LineChart;
}();

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return x;
});

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return x;
});

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);

/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  return this.each(function () {
    Object(_interrupt_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, name);
  });
});

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(350);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);




var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease__WEBPACK_IMPORTED_MODULE_2__[/* cubicInOut */ "a"]
};

function inherit(node, id) {
  var timing;

  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__[/* now */ "b"])(), defaultTiming;
    }
  }

  return timing;
}

/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  var id, timing;

  if (name instanceof _transition_index_js__WEBPACK_IMPORTED_MODULE_0__[/* Transition */ "a"]) {
    id = name._id, name = name._name;
  } else {
    id = Object(_transition_index_js__WEBPACK_IMPORTED_MODULE_0__[/* newId */ "b"])(), (timing = defaultTiming).time = Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__[/* now */ "b"])(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        Object(_transition_schedule_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _transition_index_js__WEBPACK_IMPORTED_MODULE_0__[/* Transition */ "a"](groups, this._parents, name, id);
});

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(106);





function attrRemove(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0,
        value1 = value(this),
        string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0,
        value1 = value(this),
        string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value) {
  var fullname = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(name),
      i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__[/* interpolateTransformSvg */ "b"] : _interpolate_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"];
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, Object(_tween_js__WEBPACK_IMPORTED_MODULE_2__[/* tweenValue */ "b"])(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
});

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);

/* harmony default export */ __webpack_exports__["a"] = (function (values) {
  var n = values.length;
  return function (t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(_basis_js__WEBPACK_IMPORTED_MODULE_0__[/* basis */ "a"])((t - i / n) * n, v0, v1, v2, v3);
  };
});

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);


function attrInterpolate(name, i) {
  return function (t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function (t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;

  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }

  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;

  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }

  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


function delayFunction(id, value) {
  return function () {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* init */ "g"])(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function () {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* init */ "g"])(this, id).delay = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  var id = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* get */ "f"])(this.node(), id).delay;
});

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


function durationFunction(id, value) {
  return function () {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* set */ "h"])(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function () {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* set */ "h"])(this, id).duration = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  var id = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* get */ "f"])(this.node(), id).duration;
});

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error();
  return function () {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* set */ "h"])(this, id).ease = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  var id = this._id;
  return arguments.length ? this.each(easeConstant(id, value)) : Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* get */ "f"])(this.node(), id).ease;
});

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


/* harmony default export */ __webpack_exports__["a"] = (function (match) {
  if (typeof match !== "function") match = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__[/* Transition */ "a"](subgroups, this._parents, this._name, this._id);
});

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

/* harmony default export */ __webpack_exports__["a"] = (function (transition) {
  if (transition._id !== this._id) throw new Error();

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__[/* Transition */ "a"](merges, this._parents, this._name, this._id);
});

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function (t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0,
      on1,
      sit = start(name) ? _schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* init */ "g"] : _schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* set */ "h"];
  return function () {
    var schedule = sit(this, id),
        on = schedule.on; // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.

    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, listener) {
  var id = this._id;
  return arguments.length < 2 ? Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* get */ "f"])(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
});

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function removeFunction(id) {
  return function () {
    var parent = this.parentNode;

    for (var i in this.__transition) {
      if (+i !== id) return;
    }

    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return this.on("end.remove", removeFunction(this._id));
});

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (function (select) {
  var name = this._name,
      id = this._id;
  if (typeof select !== "function") select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "e"])(subgroup[i], name, id, i, subgroup, Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__[/* get */ "f"])(node, id));
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__[/* Transition */ "a"](subgroups, this._parents, name, id);
});

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (function (select) {
  var name = this._name,
      id = this._id;
  if (typeof select !== "function") select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__[/* get */ "f"])(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "e"])(child, name, id, k, children, inherit);
          }
        }

        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__[/* Transition */ "a"](subgroups, parents, name, id);
});

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].prototype.constructor;
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return new Selection(this._groups, this._parents);
});

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);


/* harmony default export */ __webpack_exports__["a"] = (function (select) {
  if (typeof select !== "function") select = Object(_selector__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__[/* Selection */ "a"](subgroups, this._parents);
});

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);


/* harmony default export */ __webpack_exports__["a"] = (function (select) {
  if (typeof select !== "function") select = Object(_selectorAll__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__[/* Selection */ "a"](subgroups, parents);
});

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);


/* harmony default export */ __webpack_exports__["a"] = (function (match) {
  if (typeof match !== "function") match = Object(_matcher__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__[/* Selection */ "a"](subgroups, this._parents);
});

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(238);



var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length; // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.

  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__[/* EnterNode */ "a"](parent, data[i]);
    }
  } // Put any non-null nodes that don’t fit into exit.


  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue; // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.

  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);

      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  } // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.


  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);

    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__[/* EnterNode */ "a"](parent, data[i]);
    }
  } // Add any remaining nodes that were not bound to data to exit.


  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function (value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function (d) {
      data[++j] = d;
    });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;
  if (typeof value !== "function") value = Object(_constant__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key); // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.

    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;

        while (!(next = updateGroup[i1]) && ++i1 < dataLength) {
          ;
        }

        previous._next = next || null;
      }
    }
  }

  update = new _index__WEBPACK_IMPORTED_MODULE_0__[/* Selection */ "a"](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return new _index__WEBPACK_IMPORTED_MODULE_1__[/* Selection */ "a"](this._exit || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]), this._parents);
});

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (onenter, onupdate, onexit) {
  var enter = this.enter(),
      update = this,
      exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove();else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
});

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

/* harmony default export */ __webpack_exports__["a"] = (function (selection) {
  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__[/* Selection */ "a"](merges, this._parents);
});

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

/* harmony default export */ __webpack_exports__["a"] = (function (compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }

    sortgroup.sort(compareNode);
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__[/* Selection */ "a"](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var nodes = new Array(this.size()),
      i = -1;
  this.each(function () {
    nodes[++i] = this;
  });
  return nodes;
});

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var size = 0;
  this.each(function () {
    ++size;
  });
  return size;
});

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return !this.node();
});

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);


function attrRemove(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function () {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function () {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value) {
  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }

  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
});

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function propertyRemove(name) {
  return function () {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function () {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
});

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function add(name) {
    var i = this._names.indexOf(name);

    if (i < 0) {
      this._names.push(name);

      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function remove(name) {
    var i = this._names.indexOf(name);

    if (i >= 0) {
      this._names.splice(i, 1);

      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function contains(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;

  while (++i < n) {
    list.add(names[i]);
  }
}

function classedRemove(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;

  while (++i < n) {
    list.remove(names[i]);
  }
}

function classedTrue(names) {
  return function () {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function () {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function () {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()),
        i = -1,
        n = names.length;

    while (++i < n) {
      if (!list.contains(names[i])) return false;
    }

    return true;
  }

  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
});

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
});

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function () {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
});

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return this.each(raise);
});

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return this.each(lower);
});

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  var create = typeof name === "function" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(name);
  return this.select(function () {
    return this.appendChild(create.apply(this, arguments));
  });
});

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, before) {
  var create = typeof name === "function" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(_selector__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(before);
  return this.select(function () {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return this.each(remove);
});

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function selection_cloneShallow() {
  var clone = this.cloneNode(false),
      parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true),
      parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ __webpack_exports__["a"] = (function (deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
});

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);


function dispatchEvent(node, type, params) {
  var window = Object(_window__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function () {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function () {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
});

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(106);






function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function () {
    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[/* styleValue */ "b"])(this, name),
        string1 = (this.style.removeProperty(name), Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[/* styleValue */ "b"])(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function () {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[/* styleValue */ "b"])(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[/* styleValue */ "b"])(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__[/* styleValue */ "b"])(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0,
      on1,
      listener0,
      key = "style." + name,
      event = "end." + key,
      remove;
  return function () {
    var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__[/* set */ "h"])(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined; // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.

    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__[/* interpolateTransformCss */ "a"] : _interpolate_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"];
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, Object(_tween_js__WEBPACK_IMPORTED_MODULE_3__[/* tweenValue */ "b"])(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
});

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function styleInterpolate(name, i, priority) {
  return function (t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;

  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }

  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function (name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);


function textConstant(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function () {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  return this.tween("text", typeof value === "function" ? textFunction(Object(_tween_js__WEBPACK_IMPORTED_MODULE_0__[/* tweenValue */ "b"])(this, "text", value)) : textConstant(value == null ? "" : value + ""));
});

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function textInterpolate(i) {
  return function (t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;

  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }

  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
});

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var name = this._name,
      id0 = this._id,
      id1 = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__[/* newId */ "b"])();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_1__[/* get */ "f"])(node, id0);
        Object(_schedule_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__[/* Transition */ "a"](groups, this._parents, name, id1);
});

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var on0,
      on1,
      that = this,
      id = that._id,
      size = that.size();
  return new Promise(function (resolve, reject) {
    var cancel = {
      value: reject
    },
        end = {
      value: function value() {
        if (--size === 0) resolve();
      }
    };
    that.each(function () {
      var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__[/* set */ "h"])(this, id),
          on = schedule.on; // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.

      if (on !== on0) {
        on1 = (on0 = on).copy();

        on1._.cancel.push(cancel);

        on1._.interrupt.push(cancel);

        on1._.end.push(end);
      }

      schedule.on = on1;
    });
  });
});

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (target, type, selection) {
  this.target = target;
  this.type = type;
  this.selection = selection;
});

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  var d = new Date();
  return a = +a, b = +b, function (t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
});

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return genericArray; });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);


/* unused harmony default export */ var _unused_webpack_default_export = (function (a, b) {
  return (Object(_numberArray_js__WEBPACK_IMPORTED_MODULE_1__[/* isNumberArray */ "b"])(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] : genericArray)(a, b);
});
function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) {
    x[i] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a[i], b[i]);
  }

  for (; i < nb; ++i) {
    c[i] = b[i];
  }

  return function (t) {
    for (i = 0; i < na; ++i) {
      c[i] = x[i](t);
    }

    return c;
  };
}

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  var i = {},
      c = {},
      k;
  if (a === null || _typeof(a) !== "object") a = {};
  if (b === null || _typeof(b) !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function (t) {
    for (k in i) {
      c[k] = i[k](t);
    }

    return c;
  };
});

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  return a - b;
});

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (ring) {
  var i = 0,
      n = ring.length,
      area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];

  while (++i < n) {
    area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
  }

  return area;
});

/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (ring, hole) {
  var i = -1,
      n = hole.length,
      c;

  while (++i < n) {
    if (c = ringContains(ring, hole[i])) return c;
  }

  return 0;
});

function ringContains(ring, point) {
  var x = point[0],
      y = point[1],
      contains = -1;

  for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    var pi = ring[i],
        xi = pi[0],
        yi = pi[1],
        pj = ring[j],
        xj = pj[0],
        yj = pj[1];
    if (segmentContains(pi, pj, point)) return 0;
    if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) contains = -contains;
  }

  return contains;
}

function segmentContains(a, b, c) {
  var i;
  return collinear(a, b, c) && within(a[i = +(a[0] === b[0])], c[i], b[i]);
}

function collinear(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) === (c[0] - a[0]) * (b[1] - a[1]);
}

function within(p, q, r) {
  return p <= q && q <= r || r <= q && q <= p;
}

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {});

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1; // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!

  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  } // Otherwise, double repeatedly to cover.
  else {
      var z = x1 - x0,
          node = this._root,
          parent,
          i;

      while (x0 > x || x >= x1 || y0 > y || y >= y1) {
        i = (y < y0) << 1 | x < x0;
        parent = new Array(4), parent[i] = node, node = parent, z *= 2;

        switch (i) {
          case 0:
            x1 = x0 + z, y1 = y0 + z;
            break;

          case 1:
            x0 = x1 - z, y1 = y0 + z;
            break;

          case 2:
            x1 = x0 + z, y0 = y1 - z;
            break;

          case 3:
            x0 = x1 - z, y0 = y1 - z;
            break;
        }
      }

      if (this._root && this._root.length) this._root = node;
    }

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
});

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var data = [];
  this.visit(function (node) {
    if (!node.length) do {
      data.push(node.data);
    } while (node = node.next);
  });
  return data;
});

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (_) {
  return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
});

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

/* harmony default export */ __webpack_exports__["a"] = (function (x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;
  if (node) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {
    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue; // Bisect the current quadrant.

    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;
      quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](node[3], xm, ym, x2, y2), new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](node[2], x1, ym, xm, y2), new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](node[1], xm, y1, x2, ym), new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](node[0], x1, y1, xm, ym)); // Visit the closest quadrant first.

      if (i = (y >= ym) << 1 | x >= xm) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    } // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
        var dx = x - +this._x.call(null, node.data),
            dy = y - +this._y.call(null, node.data),
            d2 = dx * dx + dy * dy;

        if (d2 < radius) {
          var d = Math.sqrt(radius = d2);
          x0 = x - d, y0 = y - d;
          x3 = x + d, y3 = y + d;
          data = node.data;
        }
      }
  }

  return data;
});

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return this._root;
});

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var size = 0;
  this.visit(function (node) {
    if (!node.length) do {
      ++size;
    } while (node = node.next);
  });
  return size;
});

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

/* harmony default export */ __webpack_exports__["a"] = (function (callback) {
  var quads = [],
      q,
      node = this._root,
      child,
      x0,
      y0,
      x1,
      y1;
  if (node) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](node, this._x0, this._y0, this._x1, this._y1));

  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2,
          ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](child, x0, y0, xm, ym));
    }
  }

  return this;
});

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

/* harmony default export */ __webpack_exports__["a"] = (function (callback) {
  var quads = [],
      next = [],
      q;
  if (this._root) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](this._root, this._x0, this._y0, this._x1, this._y1));

  while (q = quads.pop()) {
    var node = q.node;

    if (node.length) {
      var child,
          x0 = q.x0,
          y0 = q.y0,
          x1 = q.x1,
          y1 = q.y1,
          xm = (x0 + x1) / 2,
          ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](child, xm, ym, x1, y1));
    }

    next.push(q);
  }

  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }

  return this;
});

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (x) {
  return function () {
    return x;
  };
});

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _formatGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(288);
/* harmony import */ var _formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(289);
/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(118);
/* harmony import */ var _formatTrim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(290);
/* harmony import */ var _formatTypes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(138);
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(111);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(137);








var map = Array.prototype.map,
    prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
/* harmony default export */ __webpack_exports__["a"] = (function (locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"] : Object(_formatGroup_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"] : Object(_formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "-" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = Object(_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(specifier);
    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type; // The "n" type is an alias for ",g".

    if (type === "n") comma = true, type = "g"; // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"][type]) precision === undefined && (precision = 12), trim = true, type = "g"; // If zero fill is specified, padding goes after sign and before digits.

    if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "="; // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.

    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : ""; // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?

    var formatType = _formatTypes_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"][type],
        maybeSuffix = /[defgprs%]/.test(type); // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].

    precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i,
          n,
          c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value; // Perform the initial formatting.

        var valueNegative = value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision); // Trim insignificant zeros.

        if (trim) value = Object(_formatTrim_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(value); // If a negative value rounds to zero during formatting, treat as positive.

        if (valueNegative && +value === 0) valueNegative = false; // Compute the prefix and suffix.

        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__[/* prefixExponent */ "b"] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : ""); // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.

        if (maybeSuffix) {
          i = -1, n = value.length;

          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      } // If the fill character is not "0", grouping is applied before padding.


      if (comma && !zero) value = group(value, Infinity); // Compute the padding.

      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : ""; // If the fill character is "0", grouping is applied after padding.

      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = ""; // Reconstruct the final output based on the desired alignment.

      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;

        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;

        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;

        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }

      return numerals(value);
    }

    format.toString = function () {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function (value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (grouping, thousands) {
  return function (value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (numerals) {
  return function (value) {
    return value.replace(/[0-9]/g, function (i) {
      return numerals[+i];
    });
  };
});

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["a"] = (function (s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;
        break;

      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;

      default:
        if (!+s[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }

  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatLocale; });
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(146);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(145);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }

  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }

  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return {
    y: y,
    m: m,
    d: d,
    H: 0,
    M: 0,
    S: 0,
    L: 0
  };
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;
  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  }; // These recursive directive definitions must be deferred.

  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function (date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;
      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function (string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week,
          day;
      if (i != string.length) return null; // If a UNIX timestamp is specified, return it.

      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0)); // If this is utcParse, never use the local timezone.

      if (Z && !("Z" in d)) d.Z = 0; // The am-pm flag is 0 for AM, and 1 for PM.

      if ("p" in d) d.H = d.H % 12 + d.p * 12; // If the month was not specified, inherit from the quarter.

      if (d.m === undefined) d.m = "q" in d ? d.q : 0; // Convert day-of-week and week-of-year to day-of-year.

      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;

        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__[/* utcMonday */ "a"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[/* utcMonday */ "a"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_2__[/* monday */ "a"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_2__[/* monday */ "a"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      } // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.


      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      } // Otherwise, all fields are in local time.


      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);

      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function format(specifier) {
      var f = newFormat(specifier += "", formats);

      f.toString = function () {
        return specifier;
      };

      return f;
    },
    parse: function parse(specifier) {
      var p = newParse(specifier += "", false);

      p.toString = function () {
        return specifier;
      };

      return p;
    },
    utcFormat: function utcFormat(specifier) {
      var f = newFormat(specifier += "", utcFormats);

      f.toString = function () {
        return specifier;
      };

      return f;
    },
    utcParse: function utcParse(specifier) {
      var p = newParse(specifier += "", true);

      p.toString = function () {
        return specifier;
      };

      return p;
    }
  };
}
var pads = {
  "-": "",
  "_": " ",
  "0": "0"
},
    numberRe = /^\s*\d+/,
    // note: ignores next directive
percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {},
      i = -1,
      n = names.length;

  while (++i < n) {
    map[names[i].toLowerCase()] = i;
  }

  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_2__[/* sunday */ "b"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(d) - 1, d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? Object(d3_time__WEBPACK_IMPORTED_MODULE_2__[/* thursday */ "c"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_2__[/* thursday */ "c"].ceil(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_2__[/* thursday */ "c"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_2__[/* monday */ "a"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__[/* utcSunday */ "b"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(d) - 1, d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[/* utcThursday */ "c"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__[/* utcThursday */ "c"].ceil(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__[/* utcThursday */ "c"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__[/* utcMonday */ "a"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoomEvent; });
function ZoomEvent(target, type, transform) {
  this.target = target;
  this.type = type;
  this.transform = transform;
}

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/* harmony default export */ __webpack_exports__["a"] = (function (callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__[/* Timer */ "a"]();
  delay = delay == null ? 0 : +delay;
  t.restart(function (elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return interpolateTransformSvg; });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);



function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({
        i: i - 4,
        x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(xa, xb)
      }, {
        i: i - 2,
        x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(ya, yb)
      });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path

      q.push({
        i: s.push(pop(s) + "rotate(", null, degParen) - 2,
        x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a, b)
      });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({
        i: s.push(pop(s) + "skewX(", null, degParen) - 2,
        x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a, b)
      });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(xa, xb)
      }, {
        i: i - 2,
        x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(ya, yb)
      });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function (a, b) {
    var s = [],
        // string constants and placeholders
    q = []; // number interpolators

    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc

    return function (t) {
      var i = -1,
          n = q.length,
          o;

      while (++i < n) {
        s[(o = q[i]).i] = o.x(t);
      }

      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__[/* parseCss */ "a"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__[/* parseSvg */ "b"], ", ", ")", ")");

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath

  this._ = "";
}

function path() {
  return new Path();
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function moveTo(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function lineTo(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function quadraticCurveTo(x1, y1, x, y) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function bezierCurveTo(x1, y1, x2, y2, x, y) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01; // Is the radius negative? Error.

    if (r < 0) throw new Error("negative radius: " + r); // Is this path empty? Move to (x1,y1).

    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    } // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) ; // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
      // Equivalently, is (x1,y1) coincident with (x2,y2)?
      // Or, is the radius zero? Line to (x1,y1).
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
          this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        } // Otherwise, draw an arc!
        else {
            var x20 = x2 - x0,
                y20 = y2 - y0,
                l21_2 = x21 * x21 + y21 * y21,
                l20_2 = x20 * x20 + y20 * y20,
                l21 = Math.sqrt(l21_2),
                l01 = Math.sqrt(l01_2),
                l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
                t01 = l / l01,
                t21 = l / l21; // If the start tangent is not coincident with (x0,y0), line to.

            if (Math.abs(t01 - 1) > epsilon) {
              this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            }

            this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
          }
  },
  arc: function arc(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0; // Is the radius negative? Error.

    if (r < 0) throw new Error("negative radius: " + r); // Is this path empty? Move to (x0,y0).

    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    } // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
        this._ += "L" + x0 + "," + y0;
      } // Is this arc empty? We’re done.


    if (!r) return; // Does the angle go the wrong way? Flip the direction.

    if (da < 0) da = da % tau + tau; // Is this a complete circle? Draw two arcs to complete the circle.

    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    } // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
        this._ += "A" + r + "," + r + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
      }
  },
  rect: function rect(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
  },
  toString: function toString() {
    return this._;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (path);

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return quadtree; });
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _cover_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(278);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(279);
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(280);
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(281);
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(136);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(282);
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(283);
/* harmony import */ var _visit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(284);
/* harmony import */ var _visitAfter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(285);
/* harmony import */ var _x_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(133);
/* harmony import */ var _y_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(134);












function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? _x_js__WEBPACK_IMPORTED_MODULE_10__[/* defaultX */ "b"] : x, y == null ? _y_js__WEBPACK_IMPORTED_MODULE_11__[/* defaultY */ "b"] : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = {
    data: leaf.data
  },
      next = copy;

  while (leaf = leaf.next) {
    next = next.next = {
      data: leaf.data
    };
  }

  return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function () {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;
  if (!node) return copy;
  if (!node.length) return copy._root = leaf_copy(node), copy;
  nodes = [{
    source: node,
    target: copy._root = new Array(4)
  }];

  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({
          source: child,
          target: node.target[i] = new Array(4)
        });else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = _add_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"];
treeProto.addAll = _add_js__WEBPACK_IMPORTED_MODULE_0__[/* addAll */ "a"];
treeProto.cover = _cover_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
treeProto.data = _data_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"];
treeProto.extent = _extent_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"];
treeProto.find = _find_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"];
treeProto.remove = _remove_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"];
treeProto.removeAll = _remove_js__WEBPACK_IMPORTED_MODULE_5__[/* removeAll */ "b"];
treeProto.root = _root_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"];
treeProto.size = _size_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"];
treeProto.visit = _visit_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"];
treeProto.visitAfter = _visitAfter_js__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"];
treeProto.x = _x_js__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"];
treeProto.y = _y_js__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"];

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export seconds */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


var second = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
  date.setTime(date - date.getMilliseconds());
}, function (date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationSecond */ "d"]);
}, function (start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationSecond */ "d"];
}, function (date) {
  return date.getUTCSeconds();
});
/* harmony default export */ __webpack_exports__["a"] = (second);
var seconds = second.range;

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export milliseconds */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var millisecond = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function () {// noop
}, function (date, step) {
  date.setTime(+date + step);
}, function (start, end) {
  return end - start;
}); // An optimized implementation for this simple case.

millisecond.every = function (k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
    date.setTime(Math.floor(date / k) * k);
  }, function (date, step) {
    date.setTime(+date + step * k);
  }, function (start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (millisecond);
var milliseconds = millisecond.range;

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeFormat; });
/* unused harmony export timeParse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcFormat; });
/* unused harmony export utcParse */
/* unused harmony export default */
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);

var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale(definition) {
  locale = Object(_locale_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}

/***/ }),
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(347);


/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(window) {/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var pbivizExample21D841A3C9DD4BD1A74D00F270DCFEC5 = {
  name: 'pbivizExample21D841A3C9DD4BD1A74D00F270DCFEC5',
  displayName: 'Power BI Example',
  class: 'Visual',
  apiVersion: '2.6.0',
  create: function create(options) {
    if (_src_visual__WEBPACK_IMPORTED_MODULE_0__[/* Visual */ "a"]) {
      return new _src_visual__WEBPACK_IMPORTED_MODULE_0__[/* Visual */ "a"](options);
    }

    throw 'Visual instance not found';
  },
  custom: true
};

if (typeof powerbi !== "undefined") {
  powerbi.visuals = powerbi.visuals || {};
  powerbi.visuals.plugins = powerbi.visuals.plugins || {};
  powerbi.visuals.plugins["pbivizExample21D841A3C9DD4BD1A74D00F270DCFEC5"] = pbivizExample21D841A3C9DD4BD1A74D00F270DCFEC5;
}

/* harmony default export */ __webpack_exports__["default"] = (pbivizExample21D841A3C9DD4BD1A74D00F270DCFEC5);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(153)))

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(219);
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(220);



d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].prototype.interrupt = _interrupt_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].prototype.transition = _transition_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"];

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cubicIn */
/* unused harmony export cubicOut */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cubicInOut; });
function cubicIn(t) {
  return t * t * t;
}
function cubicOut(t) {
  return --t * t * t + 1;
}
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return csvParse; });
/* unused harmony export csvParseRows */
/* unused harmony export csvFormat */
/* unused harmony export csvFormatBody */
/* unused harmony export csvFormatRows */
/* unused harmony export csvFormatRow */
/* unused harmony export csvFormatValue */
/* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);

var csv = Object(_dsv_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(",");
var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;
var csvFormatRow = csv.formatRow;
var csvFormatValue = csv.formatValue;

/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tsvParse; });
/* unused harmony export tsvParseRows */
/* unused harmony export tsvFormat */
/* unused harmony export tsvFormatBody */
/* unused harmony export tsvFormatRows */
/* unused harmony export tsvFormatRow */
/* unused harmony export tsvFormatValue */
/* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);

var tsv = Object(_dsv_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("\t");
var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatBody = tsv.formatBody;
var tsvFormatRows = tsv.formatRows;
var tsvFormatRow = tsv.formatRow;
var tsvFormatValue = tsv.formatValue;

/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) {
  return a = +a, b = +b, function (t) {
    return Math.round(a * (1 - t) + b * t);
  };
});

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);

/* harmony default export */ __webpack_exports__["a"] = (function (step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) / 3))) * 3 - Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Math.abs(step)));
});

/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);

/* harmony default export */ __webpack_exports__["a"] = (function (step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(max) - Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(step)) + 1;
});

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);

/* harmony default export */ __webpack_exports__["a"] = (function (step) {
  return Math.max(0, -Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Math.abs(step)));
});

/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export months */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var month = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function (date, step) {
  date.setMonth(date.getMonth() + step);
}, function (start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function (date) {
  return date.getMonth();
});
/* harmony default export */ __webpack_exports__["a"] = (month);
var months = month.range;

/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hours */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


var hour = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationSecond */ "d"] - date.getMinutes() * _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationMinute */ "c"]);
}, function (date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationHour */ "b"]);
}, function (start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationHour */ "b"];
}, function (date) {
  return date.getHours();
});
/* harmony default export */ __webpack_exports__["a"] = (hour);
var hours = hour.range;

/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export minutes */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


var minute = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationSecond */ "d"]);
}, function (date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationMinute */ "c"]);
}, function (start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationMinute */ "c"];
}, function (date) {
  return date.getMinutes();
});
/* harmony default export */ __webpack_exports__["a"] = (minute);
var minutes = minute.range;

/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMonths */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var utcMonth = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function (start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function (date) {
  return date.getUTCMonth();
});
/* harmony default export */ __webpack_exports__["a"] = (utcMonth);
var utcMonths = utcMonth.range;

/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcHours */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


var utcHour = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
  date.setUTCMinutes(0, 0, 0);
}, function (date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationHour */ "b"]);
}, function (start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationHour */ "b"];
}, function (date) {
  return date.getUTCHours();
});
/* harmony default export */ __webpack_exports__["a"] = (utcHour);
var utcHours = utcHour.range;

/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMinutes */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


var utcMinute = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (date) {
  date.setUTCSeconds(0, 0);
}, function (date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationMinute */ "c"]);
}, function (start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[/* durationMinute */ "c"];
}, function (date) {
  return date.getUTCMinutes();
});
/* harmony default export */ __webpack_exports__["a"] = (utcMinute);
var utcMinutes = utcMinute.range;

/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
} // p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]


/* harmony default export */ __webpack_exports__["a"] = (function (p0, p1) {
  var ux0 = p0[0],
      uy0 = p0[1],
      w0 = p0[2],
      ux1 = p1[0],
      uy1 = p1[1],
      w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S; // Special case for u0 ≅ u1.

  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;

    i = function i(t) {
      return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
    };
  } // General case.
  else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;

      i = function i(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
      };
    }

  i.duration = S * 1000;
  return i;
});

/***/ })
/******/ ]);
//# sourceMappingURL=visual.js.map