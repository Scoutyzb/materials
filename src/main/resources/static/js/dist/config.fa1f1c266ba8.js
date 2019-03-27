define(["require"], function() {
  return requirejs.config({
    deps: ["base"],
    // baseUrl: '/static/js/dist',
    baseUrl: '/js/dist',
    // urlArgs: "cachebust=1426a36",
    paths: {
      "jquery": "../../components/jquery/dist/jquery",
      "backbone": "../../components/backbone/backbone",
      "jquerycookie": "../../components/jquery.cookie/jquery.cookie",
      "jqueryuicore": "../../components/jquery-ui/ui/minified/jquery.ui.core.min",
      "accordion": "../../components/jquery-ui/ui/minified/jquery.ui.accordion.min",
      "autocomplete": "../../components/jquery-ui/ui/minified/jquery.ui.autocomplete.min",
      "slider": "../../components/jquery-ui/ui/minified/jquery.ui.slider.min",
      "uiwidget": "../../components/jquery-ui/ui/minified/jquery.ui.widget.min",
      "uimenu": "../../components/jquery-ui/ui/minified/jquery.ui.menu.min",
      "uimouse": "../../components/jquery-ui/ui/minified/jquery.ui.mouse.min",
      "uiposition": "../../components/jquery-ui/ui/minified/jquery.ui.position.min",
      "jqueryui": "../modules/jqueryui-custom",
      "jqmigrate": "../../components/jquery/jquery-migrate",
      "trunk8": "../../components/trunk8/trunk8",
      "tag-it": "../../components/tag-it/js/tag-it.min",
      "jquerycsrf": "../modules/jquery.csrf",
      "teacup": "../modules/teacup",
      "colresizable": "../modules/colResizable",
      "dt-bootstrap": "../modules/dataTables.bootstrap",
      "highcharts": "../../components/highcharts-release/highcharts",
      "highcharts-heatmap": "../../components/highcharts-release/modules/heatmap-ublock-defeat",
      "exporting": "../../components/highcharts-release/modules/exporting",
      "datatables": "../../components/datatables/media/js/jquery.dataTables",
      "tabletools": "../modules/TableTools",
      "colvis": "../../components/datatables-colvis/js/dataTables.colVis",
      "selectpicker": "../../components/bootstrap-select/bootstrap-select.min",
      "textchange": "../modules/text-change",
      "multiselect": "../../components/bootstrap-multiselect/js/multiselect.min",
      "bootstrap": "../../components/bootstrap/dist/js/bootstrap.min",
      "touchpunch": "../../components/jquery-ui-touch-punch/jquery.ui.touch-punch.min",
      "lodash": "../../components/lodash/dist/lodash",
      "typeahead": "../../components/typeahead.js/dist/typeahead.bundle.min",
      "underscore": "../modules/lodash.underscore.custom",
      "_extras": "../modules/lodash.extras.min",
      "text": "../../components/text/text",
      "ionslider": "../modules/ion.rangeSlider.custom",
      "jsmol": "../modules/jsmol.min",
      "zeroclipboard": "../../components/zeroclipboard/dist/ZeroClipboard.min",
      "numeric": "../modules/numeric-1.2.6.min",
      "bean": "../../components/bean/bean.min",
      "flotr": "../modules/flotr/flotr2.amd",
      "flotr_ex": "../modules/flotr/examples",
      "papaparse": "../../components/papaparse/papaparse.min",
      "select2": "../modules/select2.min",
      "vue": "../modules/vue.min",
      "plotly": "../modules/plotly.min",
      "json-human": "../../components/json-human/src/json.human",
      "vibcrystal": "../../components/phononwebsite/vibcrystal",
      "phononhighcharts": "../../components/phononwebsite/phononhighcharts",
      "phononweb": "../../components/phononwebsite/phononweb",
      "complex": "../../components/phononwebsite/complex.min",
      "stats": "../../components/phononwebsite/stats.min",
      "utils": "../../components/phononwebsite/utils",
      "atomic_data": "../../components/phononwebsite/atomic_data",
      "Detector": "../../components/phononwebsite/Detector",
      "mat": "../../components/phononwebsite/mat",
      "mpdb": "../../components/phononwebsite/mpdb",
      "phononjson": "../../components/phononwebsite/phononjson",
      "phononyaml": "../../components/phononwebsite/phononyaml",
      "exportfiles": "../../components/phononwebsite/exportfiles",
      "threejs": "../../components/phononwebsite/three",
      "TrackballControls": "../../components/phononwebsite/TrackballControls"
    },
    waitseconds: 20000,
    shim: {
      jquery: {
        exports: '$'
      },
      jqueryui: {
        deps: ["jquery"],
        exports: "$"
      },
      jqueryuicore: {
        deps: ["jquery"],
        exports: "$"
      },
      lodash: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      jquerycookie: {
        deps: ["jquery"]
      },
      highcharts: {
        deps: ["jquery"],
        exports: "Highcharts"
      },
      jsmol: {
        deps: ["jquery"],
        exports: "Jmol"
      },
      complex: {
        exports: "Complex"
      },
      Detector: {
        exports: "Detector"
      },
      threejs: {
        deps: ["jquery"],
        exports: "THREE"
      },
      TrackballControls: {
        deps: ["threejs"],
        exports: "THREE.TrackballControls"
      },
      mathjax: {
        exports: "MathJax"
      },
      "dt-bootstrap": ["bootstrap", "datatables"],
      "ionslider": ["jquery"],
      "trunk8": ["jquery"],
      "typeahead": ["jquery"],
      "tabletools": ["datatables"],
      "colresizable": ["jquery"],
      "multiselect": ["bootstrap"],
      "touchpunch": ["jqueryui"],
      "exporting": ["highcharts"],
      "textchange": ["jquery"],
      "bootstrap": ["jquery"],
      "uimouse": ["jquery", "jqueryuicore", "uiwidget"],
      "uiposition": ["jqueryuicore"],
      "uiwidget": ["jquery", "jqueryuicore", "uiposition"],
      "uimenu": ["jquery", "jqueryuicore", "uiposition", "uiwidget"],
      "accordion": ["uiwidget", "jqueryuicore", "uiposition", "uimenu"],
      "autocomplete": ["uiwidget", "uiposition", "jqueryuicore"],
      "slider": ["uimouse"],
      "selectpicker": ["jquery"],
      "tag-it": ["jqueryui"],
      "jquery.openid": ["jquery"],
      "jquerycsrf": ["jquerycookie"],
      "datatables": ["jquery"],
      "jqmigrate": ["jquery"],
      "select2": ["jquery"],
      "highcharts-heatmap": ["highcharts"]
    }
  });
});
