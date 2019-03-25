var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __slice = [].slice;

define(["SearchView", "ResultsView", "tag-it"], function(SearchView, ResultsView) {
  var MEresults, MaterialsExplorer;
  MaterialsExplorer = (function(_super) {
    __extends(MaterialsExplorer, _super);

    function MaterialsExplorer() {
      this.uploadStructure = __bind(this.uploadStructure, this);
      this.toggleInputs = __bind(this.toggleInputs, this);
      this.removeTag = __bind(this.removeTag, this);
      this.addTag = __bind(this.addTag, this);
      this.loadAutocomplete = __bind(this.loadAutocomplete, this);
      return MaterialsExplorer.__super__.constructor.apply(this, arguments);
    }

    MaterialsExplorer.prototype.className = "row";

    MaterialsExplorer.prototype.tagName = "div";

    MaterialsExplorer.prototype.id = "structure-upload";

    MaterialsExplorer.prototype.events = function() {
      return {
        "upload #upload": "uploadStructure"
      };
    };

    MaterialsExplorer.prototype.initialize = function(_arg) {
      this.searchField = _arg.searchField;
      this.name = "Explore Materials";
      this.idKey = "task_id";
      this.collectionURL = "/apps/materials_explorer/results";
      this.idRegexFunction = _.isMaterialId;
      this.detailPageHref = "/materials/";
      this.resultsSubclass = MEresults;
      this.sortColumn = 4;
      MaterialsExplorer.__super__.initialize.apply(this, arguments);
      if ($(".tagit").isEmpty()) {
        return require(["text!../json/tags.json"], (function(_this) {
          return function(tags) {
            return _this.loadAutocomplete(JSON.parse(tags));
          };
        })(this));
      }
    };

    MaterialsExplorer.prototype.addInstructionHtml = function() {
      if ($("#syntax-help").isEmpty()) {
        $("body").append(function() {
          return _.simpleModal({
            title: "Advanced Search Syntax",
            text: tc.render(function() {
              tc.p("Easily switch between search modes without opening the dropdown menu. Simply start typing a material id, a formula, or a chemical system and submit your search. We also support the following syntax rules for specific search modes:");
              tc.div(".pull-down", function() {
                tc.h4("Formula Search Syntax");
                tc.p("In addition to standard formula input, formulas containing wild card elements are supported.");
                tc.p("This allows you to specify a composition with explicit elements as well as any other element that might exist in the composition. ");
                tc.p(function() {
                  return tc.raw("For example, <code>*2O</code> will yield a list of the following formula results:");
                });
                tc.p("B2O, Xe2O, Li2O ...");
                tc.p(function() {
                  return tc.raw("and <code>*1*1O5</code> will yield results of the form:");
                });
                return tc.p("BXeO5, LiXeO5, LiBO5 ...");
              });
              tc.div(".pull-down", function() {
                tc.h4("Element Search Syntax");
                return tc.p(function() {
                  return tc.raw("<code>Li-Fe-O</code> or <code>*-Fe-O</code> will be interpreted as chemical systems, with <code>*</code> denoting a wild card element");
                });
              });
              return tc.div(".pull-down", function() {
                tc.h4("Mpquery Search Syntax");
                tc.p(function() {
                  return tc.raw(" Using a full dict syntax, even more powerful queries can be constructed. For example, <pre>{\"elements\":{\"$in\":[\"Li\", \"Na\", \"K\"], \"$all\": [\"O\"]}, \"nelements\":2}</pre> selects all oxides of Li, Na and K, and <pre>{\"band_gap\": {\"$gt\": 1}}</pre> selects all materials with band gaps greater than 1 eV.");
                });
                return tc.p(function() {
                  return tc.raw("Consult our API's <a href='https://github.com/materialsproject/mapidoc' target='_blank'>documentation repository</a> for descriptions of each of the properties available as search criteria.");
                });
              });
            }),
            id: "syntax-modal",
            includeCloseBtn: true
          });
        });
        $("#search-label").append(function() {
          return tc.render(function() {
            return tc.small("#syntax-help", function() {
              return tc.a({
                href: "#syntax-modal",
                "data-toggle": "modal"
              }, "Advanced Search Syntax");
            });
          });
        });
        return $("#search-label").on("searchlabel:change", this.ensureInstructionHtml);
      }
    };

    MaterialsExplorer.prototype.ensureInstructionHtml = function(e, label) {
      if (label === 'Explore Materials' && $("#syntax-help").isEmpty()) {
        return $("#search-label").append(function() {
          return tc.render(function() {
            return tc.small("#syntax-help", function() {
              return tc.a({
                href: "#syntax-modal",
                "data-toggle": "modal"
              }, "Advanced Search Syntax");
            });
          });
        });
      }
    };

    MaterialsExplorer.prototype.loadAutocomplete = function(source) {
      if (this.tags == null) {
        this.tags = [];
      }
      return $("#material-tags").tagit({
        fieldName: "tags",
        caseSensitive: false,
        allowSpaces: true,
        placeholderText: "imgreite",
        afterTagAdded: this.addTag,
        afterTagRemoved: this.removeTag,
        autocomplete: {
          source: function(req, response) {
            var results, term;
            term = req.term.toLowerCase();
            results = source.filter(function(d) {
              d = d.toLowerCase();
              return d.indexOf(term) === 0;
            });
            return response(_.first(results, 10));
          }
        }
      });
    };

    MaterialsExplorer.prototype.addTag = function(e, _arg) {
      var tagLabel;
      tagLabel = _arg.tagLabel;
      this.tags.push(tagLabel);
      return this.updateTags();
    };

    MaterialsExplorer.prototype.updateTags = function() {
      var input, key, _ref;
      if (_.isEmpty(this.tags)) {
        return this.model.unset("tags");
      } else {
        this.model.set({
          tags: JSON.stringify(this.tags, {
            silent: true
          })
        });
        _ref = this.searchField.model.toJSON(), key = _ref.key, input = _ref.input;
        if (!_.isEmpty(input)) {
          return this.setModel(this.searchField.model);
        }
      }
    };

    MaterialsExplorer.prototype.removeTag = function(e, _arg) {
      var tagLabel;
      tagLabel = _arg.tagLabel;
      _.pull(this.tags, tagLabel);
      return this.updateTags();
    };

    MaterialsExplorer.prototype.toggleInputs = function() {
      var input, key, _ref;
      this.addInstructionHtml();
      _ref = this.searchField.model.toJSON(), key = _ref.key, input = _ref.input;
      if (this.model.has("file_string")) {
        this.model.clear();
      }
      if (key === "structure") {
        this.searchField.hideInput();
        this.results.$el.before(this.el);
        this.addUploadForm();
      } else {
        this.searchField.showInput();
        this.$el.remove();
      }
      return MaterialsExplorer.__super__.toggleInputs.apply(this, arguments);
    };

    MaterialsExplorer.prototype.addUploadForm = function() {
      this.$el.html(function() {
        return tc.render(function() {
          tc.center(".note", "Drop *.cif or POSCAR/CONTCAR or *.cssr file here");
          return tc.center("#upload.well.dark-well.span5");
        });
      });
      this.$el.find("#upload").after("<center style='margin: -10px 0 0 330px; text-align: left;'><div><input type='radio' name='fit-type' id='fit-type-elem' value='elem' checked='checked'><label for='fit-type-elem' style='vertical-align: sub'>Match chemistry: <span class='chemform'>Ca2CuO3</span> &rarr; <span class='chemform'>Ca2CuO3</span></label></div><div><input type='radio' name='fit-type' id='fit-type-anon' value='anon'><label for='fit-type-anon' style='vertical-align: sub'>Match anonymous: <span class='chemform'>Ca2CuO3</span> &rarr; <span class='chemform'>AB2C3</span></label></div></center>");
      this.$el.find("span.chemform").each(function() {
        return $(this).html(_.htmlFormula($(this).text()));
      });
      return require(["FileUploader"], (function(_this) {
        return function(FileUploader) {
          _this.uploader = new FileUploader({
            el: "#upload",
            type: "drag"
          });
          $("#upload").on("upload", _this.uploadStructure);
          return $("input[name=fit-type]").on("change", function(e) {
            console.log("tiggered");
            if (App.view.model.has("file_string")) {
              App.view.uploadStructure(e, App.view.model.toJSON());
              return console.log("triggered");
            }
          });
        };
      })(this));
    };

    MaterialsExplorer.prototype.uploadStructure = function(e, _arg) {
      var file_string, filename, fit_type;
      file_string = _arg.file_string, filename = _arg.filename;
      this.model.clear();
      fit_type = this.$el.find("input[name=fit-type]:checked").val();
      return this.model.set({
        file_string: file_string,
        filename: filename,
        fit_type: fit_type
      });
    };

    return MaterialsExplorer;

  })(SearchView);
  MEresults = (function(_super) {
    __extends(MEresults, _super);

    function MEresults() {
      return MEresults.__super__.constructor.apply(this, arguments);
    }

    MEresults.prototype.events = function() {
      return _.extend({}, MEresults.__super__.events.apply(this, arguments), {
        "click #select": "checkAllResults",
        "click #edit": "toStructureEditor",
        "click input[type='checkbox']": "updateBatch"
      });
    };

    MEresults.prototype.initialize = function() {
      this.hiddenColumns = ["has_bandstructure", "crystal_system", "count"];
      this.listenTo(this.model, "change:tags", this.clearTags);
      return MEresults.__super__.initialize.apply(this, arguments);
    };

    MEresults.prototype.clearTags = function() {
      if (_.has(this.model.changed, "tags") && !this.model.has("tags")) {
        this.tags = [];
        return $("#material-tags").tagit("removeAll");
      }
    };

    MEresults.prototype.toStructureEditor = function(e) {
      var data, selectedIds;
      selectedIds = _.map(this.$("input[type='checkbox']:checked"), function(input) {
        return $(input).attr("id");
      });
      selectedIds = _.first(selectedIds, 10).join(",");
      data = {
        input: 0,
        materialIDs: selectedIds
      };
      return document.location = "#apps/xtaltoolkit/" + _.encode(data);
    };

    MEresults.prototype.formatTableData = function(titles, collection) {
      var rows;
      return rows = collection.map(function(data) {
        var warningBtn;
        data = data.toJSON();
        warningBtn = tc.render(function() {
          return tc.span(".pull-right.label-bg.warning-tooltip.label-bg-warning", {
            "data-toggle": "tooltip",
            title: "gap value is approximate and using a loose k-point mesh"
          }, function() {
            return tc.span(".typcn.typcn-warning");
          });
        });
        return _.map(titles, function(title) {
          var d, datum, _ref;
          datum = (_ref = data[title]) != null ? _ref : "";
          return datum = (function() {
            switch (false) {
              case title !== "band_gap (eV)":
                d = datum.toFixed(3);
                if (data.has_bandstructure) {
                  return d;
                } else {
                  return d + warningBtn;
                }
                break;
              case title !== "spacegroup":
                return _.htmlSpacegroup(datum.symbol);
              case !_.isObject(datum):
                return datum[_.keys(datum)[0]];
              case !_.isNumber(datum):
                return _.cleanDecimals(datum, 3, false);
              case !_.contains(title, "formula"):
                return _.htmlFormula(datum);
              case !_.startsWith(title, "<span"):
                return "<input id='" + data.materials_id + "' type='checkbox'/>";
              default:
                return datum;
            }
          })();
        });
      });
    };

    MEresults.prototype.formatColumnHeaders = function(titles) {
      titles.push("<span class='fontastic-edit-pen-1'></span>");
      return MEresults.__super__.formatColumnHeaders.apply(this, arguments);
    };

    MEresults.prototype.getTitles = function(allAttrs) {
      var firstCols, titles;
      titles = _.uniq(_.flatten(allAttrs));
      firstCols = ["materials_id", "formula", "spacegroup", "formation_energy (eV)", "e_above_hull (eV)", "band_gap (eV)"];
      _.pull.apply(_, [titles].concat(__slice.call(firstCols)));
      titles.unshift.apply(titles, firstCols);
      return titles;
    };

    MEresults.prototype.createResultsTable = function() {
      var totalResults;
      MEresults.__super__.createResultsTable.apply(this, arguments);
      this.addBatchButtons();
      this.$(".warning-tooltip").tooltip({
        placement: "right"
      });
      if (this.collection.length === 500) {
        totalResults = this.collection.first().get('count');
        return this.$el.prepend(function() {
          return tc.render(function() {
            return tc.span(".label-bg.label-bg-warning.typcn.typcn-warning", " only showing 500 most stable results out of " + totalResults);
          });
        });
      }
    };

    return MEresults;

  })(ResultsView);
  return MaterialsExplorer;
});
