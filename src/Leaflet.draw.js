/**
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
L.drawVersion = "0.4.2";
/**
 * @class L.Draw
 * @aka Draw
 *
 *
 * To add the draw toolbar set the option drawControl: true in the map options.
 *
 * @example
 * ```js
 *      var map = L.map('map', {drawControl: true}).setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 * ```
 *
 * ### Adding the edit toolbar
 * To use the edit toolbar you must initialise the Leaflet.draw control and manually add it to the map.
 *
 * ```js
 *      var map = L.map('map').setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 *
 *      // FeatureGroup is to store editable layers
 *      var drawnItems = new L.FeatureGroup();
 *      map.addLayer(drawnItems);
 *
 *      var drawControl = new L.Control.Draw({
 *          edit: {
 *              featureGroup: drawnItems
 *          }
 *      });
 *      map.addControl(drawControl);
 * ```
 *
 * The key here is the featureGroup option. This tells the plugin which FeatureGroup contains the layers that
 * should be editable. The featureGroup can contain 0 or more features with geometry types Point, LineString, and Polygon.
 * Leaflet.draw does not work with multigeometry features such as MultiPoint, MultiLineString, MultiPolygon,
 * or GeometryCollection. If you need to add multigeometry features to the draw plugin, convert them to a
 * FeatureCollection of non-multigeometries (Points, LineStrings, or Polygons).
 */
L.Draw = {};

/**
 * @class L.drawLocal
 * @aka L.drawLocal
 *
 * The core toolbar class of the API — it is used to create the toolbar ui
 *
 * @example
 * ```js
 *      var modifiedDraw = L.drawLocal.extend({
 *          draw: {
 *              toolbar: {
 *                  buttons: {
 *                      polygon: 'Draw an awesome polygon'
 *                  }
 *              }
 *          }
 *      });
 * ```
 *
 * The default state for the control is the draw toolbar just below the zoom control.
 *  This will allow map users to draw vectors and markers.
 *  **Please note the edit toolbar is not enabled by default.**
 */
L.drawLocal = {
	// format: {
	// 	numeric: {
	// 		delimiters: {
	// 			thousands: ',',
	// 			decimal: '.'
	// 		}
	// 	}
	// },
	draw: {
		toolbar: {
			// #TODO: this should be reorganized where actions are nested in actions
			// ex: actions.undo  or actions.cancel
			actions: {
				title: "Cancelar desenho",
				text: "Cancelar",
			},
			finish: {
				title: "Finalizar desenho",
				text: "Finalizar",
			},
			undo: {
				title: "Excluir último ponto desenhado",
				text: "Excluir último ponto",
			},
			buttons: {
				polyline: "Desenhar uma polilinha",
				polygon: "Desenhar um polígono",
				rectangle: "Desenhar um retângulo",
				circle: "Desenhar um círculo",
				marker: "Desenhar um marcador",
				circlemarker: "Desenhar um marcador circular",
			},
		},
		handlers: {
			circle: {
				tooltip: {
					start: "Clique e arraste para desenhar um círculo.",
				},
				radius: "Raio",
			},
			circlemarker: {
				tooltip: {
					start: "Clique no mapa para colocar um marcador circular.",
				},
			},
			marker: {
				tooltip: {
					start: "Clique no mapa para colocar um marcador.",
				},
			},
			polygon: {
				tooltip: {
					start: "Clique para começar a desenhar a forma.",
					cont: "Clique para continuar desenhando a forma.",
					end: "Clique no primeiro ponto para fechar esta forma.",
				},
			},
			polyline: {
				error: "<strong>Erro:</strong> as bordas da forma não podem se cruzar!",
				tooltip: {
					start: "Clique para começar a desenhar a linha.",
					cont: "Clique para continuar desenhando a linha.",
					end: "Clique no último ponto para finalizar a linha.",
				},
			},
			rectangle: {
				tooltip: {
					start: "Clique e arraste para desenhar um retângulo.",
				},
			},
			simpleshape: {
				tooltip: {
					end: "Solte o mouse para finalizar o desenho.",
				},
			},
		},
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: "Salvar alterações",
					text: "Salvar",
				},
				cancel: {
					title: "Cancelar edição, descarta todas as alterações",
					text: "Cancelar",
				},
				clearAll: {
					title: "Limpar todas as camadas",
					text: "Limpar Tudo",
				},
			},
			buttons: {
				edit: "Editar camadas",
				editDisabled: "Nenhuma camada para editar",
				remove: "Excluir camadas",
				removeDisabled: "Nenhuma camada para excluir",
			},
		},
		handlers: {
			edit: {
				tooltip: {
					text: "Arraste os pontos ou marcadores para editar os recursos.",
					subtext: "Clique em cancelar para desfazer as alterações.",
				},
			},
			remove: {
				tooltip: {
					text: "Clique em um recurso para removê-lo.",
				},
			},
		},
	},
};
