
  AmCharts.makeChart("chartdiv",
    {
      "type": "pie",
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "labelText": "[[value]] ",
      "titleField": "category",
      "valueField": "column-1",
      "thousandsSeparator": " ",
      "theme": "light",
      "labelRadius": 1,
      "colors": [
            "#3680be",
            "#cdcdcd",
            "#ff1c1c",
          ],
      "allLabels": [],
      "balloon": {},
      "legend": {
          "enabled": true,
          "align": "left",
          "markerType": "square",
          "valueText": ""
        },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": "Активы 2015 год"
        }
      ],
      "dataProvider": [
        {
          "category": "Средства в кассе, в банках и иных финансовых учреждениях",
          "column-1": "1593851",
          "column-2": "1108870"
        },
        {
          "category": "Кредиты клиентам",
          "column-1": "3971888",
          "column-2": "3160557"
        },
        {
          "category": "Прочие активы",
          "column-1": "459484",
          "column-2": "342734"
        }
      ]
    }
  );

  AmCharts.makeChart("chartdiv2",
    {
      "type": "pie",
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "labelRadius": 1,
      "labelText": "[[value]] ",
      "titleField": "category",
      "valueField": "column-1",
      "thousandsSeparator": " ",
      "theme": "light",
      "colors": [
        "#3680be",
        "#cdcdcd",
        "#ff1c1c",
      ],
      "allLabels": [],
      "balloon": {},
      "legend": {
        "enabled": true,
        "align": "left",
        "markerType": "square",
        "valueText": ""
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": "Активы 2014 год"
        }
      ],
      "dataProvider": [
        {
          "category": "Средства в кассе, в банках и иных финансовых учреждениях",
          "column-1": "1108870"
        },
        {
          "category": "Кредиты клиентам",
          "column-1": "3160557"
        },
        {
          "category": "Прочие активы",
          "column-1": "342734"
        }
      ]
    }
  );

  AmCharts.makeChart("chartdiv3",
    {
      "type": "pie",
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "labelRadius": 1,
      "labelText": "[[value]] ",
      "colors": [
        "#3680be",
        "#cdcdcd",
        "#ff1c1c",
      ],
      "titleField": "category",
      "valueField": "column-1",
      "thousandsSeparator": " ",
      "theme": "light",
      "allLabels": [],
      "balloon": {},
      "legend": {
        "enabled": true,
        "align": "left",
        "markerType": "square",
        "valueText": ""
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": "Обязательства 2015 год"
        }
      ],
      "dataProvider": [
        {
          "category": "Средства банков и иных кредиторов",
          "column-1": "930308"
        },
        {
          "category": "Средства клиентов",
          "column-1": "4326081"
        },
        {
          "category": "Прочие обязательства",
          "column-1": "74996"
        }
      ]
    }
  );

  AmCharts.makeChart("chartdiv4",
    {
      "type": "pie",
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "labelRadius": 1,
      "labelText": "[[value]] ",
      "colors": [
        "#3680be",
        "#cdcdcd",
        "#ff1c1c",
      ],
      "titleField": "category",
      "valueField": "column-1",
      "thousandsSeparator": " ",
      "theme": "light",
      "allLabels": [],
      "balloon": {},
      "legend": {
        "enabled": true,
        "align": "left",
        "markerType": "square",
        "valueText": ""
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": "Обязательства 2014 год"
        }
      ],
      "dataProvider": [
        {
          "category": "Средства банков и иных кредиторов",
          "column-1": "831369"
        },
        {
          "category": "Средства клиентов",
          "column-1": "3019973"
        },
        {
          "category": "Прочие обязательства",
          "column-1": "98707"
        }
      ]
    }
  );

  AmCharts.makeChart("chartdiv5",
    {
      "type": "pie",
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "labelRadius": 1,
      "labelText": "[[value]] ",
      "colors": [
        "#3680be",
        "#cdcdcd",
        "#ff1c1c",
      ],
      "titleField": "category",
      "valueField": "column-1",
      "thousandsSeparator": " ",
      "theme": "light",
      "allLabels": [],
      "balloon": {},
      "legend": {
        "enabled": true,
        "align": "left",
        "markerType": "square",
        "valueText": "",
        "maxColumns": 1
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": "Капитал 2015 год"
        }
      ],
      "dataProvider": [
        {
          "category": "Уставный фонд",
          "column-1": "121857"
        },
        {
          "category": "Резервы и фонды",
          "column-1": "571981"
        }
      ]
    }
  );

  AmCharts.makeChart("chartdiv6",
    {
      "type": "pie",
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "labelRadius": 1,
      "labelText": "[[value]] ",
      "colors": [
        "#3680be",
        "#cdcdcd",
        "#ff1c1c",
      ],
      "titleField": "category",
      "valueField": "column-1",
      "thousandsSeparator": " ",
      "theme": "light",
      "allLabels": [],
      "balloon": {},
      "legend": {
        "enabled": true,
        "align": "left",
        "markerType": "square",
        "valueText": "",
        "maxColumns": 1
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": "Капитал 2014 год"
        }
      ],
      "dataProvider": [
          {
            "category": "Уставный фонд",
            "column-1": "121857"
          },
          {
            "category": "Резервы и фонды",
            "column-1": "540255"
          }
        ]
    }
  );

  AmCharts.makeChart("chartdiv-bar",
    {
      "type": "serial",
      "categoryField": "category",
      "rotate": true,
      "startDuration": 1,
      "thousandsSeparator": " ",
      "theme": "light",
      "colors": [
        "#cdcdcd",
        "#3680be",
        "#ff1c1c",
      ],
      "categoryAxis": {
        "gridPosition": "start"
      },
      "trendLines": [],
      "graphs": [
        {
          "balloonText": "[[title]] | [[category]]:[[value]]",
          "fillAlphas": 1,
          "id": "AmGraph-1",
          "labelText": "[[value]]",
          "title": "2015",
          "type": "column",
          "valueField": "column-1"
        },
        {
          "balloonText": "[[title]] | [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-2",
          "labelText": "[[value]]",
          "lineThickness": 2,
          "title": "2014",
          "valueField": "column-2"
        }
      ],
      "guides": [],
      "valueAxes": [
        {
          "id": "ValueAxis-1",
          "title": ""
        }
      ],
      "allLabels": [],
      "balloon": {},
      "legend": {
        "enabled": true,
        "useGraphSettings": true
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": ""
        }
      ],
      "dataProvider": [
        {
          "category": "Процентные доходы",
          "column-1": "1085279",
          "column-2": "1016950"
        },
        {
          "category": "Процентные расходы",
          "column-1": "663774",
          "column-2": "621916"
        },
        {
          "category": "Чистый процентный доход",
          "column-1": "411505",
          "column-2": "395034"
        },
        {
          "category": "Отчисления в резервы",
          "column-1": "618347",
          "column-2": "226321"
        },
        {
          "category": "Чистый комиссионный доход",
          "column-1": "514488",
          "column-2": "409026"
        },
        {
          "category": "Прочие доходы",
          "column-1": "409548",
          "column-2": "143617"
        },
        {
          "category": "Прочие расходы",
          "column-1": "660415",
          "column-2": "462145"
        },
        {
          "category": "Прибыль до налога",
          "column-1": "56779",
          "column-2": "259211"
        },
        {
          "category": "Налог на прибыль",
          "column-1": "4672",
          "column-2": "38503"
        },
        {
          "category": "Прибыль за отчетный год",
          "column-1": "52107",
          "column-2": "220708"
        }
      ]
    }
  );

  AmCharts.makeChart("chartdiv1-1",
    {
      "type": "pie",
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "labelText": "[[value]] ",
      "titleField": "category",
      "valueField": "column-1",
      "thousandsSeparator": " ",
      "theme": "light",
      "labelRadius": 1,
      "colors": [
            "#3680be",
            "#cdcdcd",
            "#ff1c1c",
          ],
      "allLabels": [],
      "balloon": {},
      "legend": {
          "enabled": true,
          "align": "left",
          "markerType": "square",
          "valueText": ""
        },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": "Активы 2015 год"
        }
      ],
      "dataProvider": [
        {
          "category": "Средства в кассе, в банках и иных финансовых учреждениях",
          "column-1": "1538645",
        },
        {
          "category": "Кредиты клиентам",
          "column-1": "4317782",
        },
        {
          "category": "Прочие активы",
          "column-1": "412682",
        }
      ]
    }
  );

  AmCharts.makeChart("chartdiv1-2",
    {
      "type": "pie",
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "labelRadius": 1,
      "labelText": "[[value]] ",
      "titleField": "category",
      "valueField": "column-1",
      "thousandsSeparator": " ",
      "theme": "light",
      "colors": [
        "#3680be",
        "#cdcdcd",
        "#ff1c1c",
      ],
      "allLabels": [],
      "balloon": {},
      "legend": {
        "enabled": true,
        "align": "left",
        "markerType": "square",
        "valueText": ""
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": "Активы 2014 год"
        }
      ],
      "dataProvider": [
        {
          "category": "Средства в кассе, в банках и иных финансовых учреждениях",
          "column-1": "1040076"
        },
        {
          "category": "Кредиты клиентам",
          "column-1": "3306929"
        },
        {
          "category": "Прочие активы",
          "column-1": "306675"
        }
      ]
    }
  );

  AmCharts.makeChart("chartdiv1-3",
    {
      "type": "pie",
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "labelRadius": 1,
      "labelText": "[[value]] ",
      "colors": [
        "#3680be",
        "#cdcdcd",
        "#ff1c1c",
      ],
      "titleField": "category",
      "valueField": "column-1",
      "thousandsSeparator": " ",
      "theme": "light",
      "allLabels": [],
      "balloon": {},
      "legend": {
        "enabled": true,
        "align": "left",
        "markerType": "square",
        "valueText": ""
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": "Обязательства 2015 год"
        }
      ],
      "dataProvider": [
        {
          "category": "Средства банков и иных кредиторов",
          "column-1": "1102280"
        },
        {
          "category": "Средства клиентов",
          "column-1": "4067159"
        },
        {
          "category": "Прочие обязательства",
          "column-1": "146430"
        }
      ]
    }
  );

  AmCharts.makeChart("chartdiv1-4",
    {
      "type": "pie",
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "labelRadius": 1,
      "labelText": "[[value]] ",
      "colors": [
        "#3680be",
        "#cdcdcd",
        "#ff1c1c",
      ],
      "titleField": "category",
      "valueField": "column-1",
      "thousandsSeparator": " ",
      "theme": "light",
      "allLabels": [],
      "balloon": {},
      "legend": {
        "enabled": true,
        "align": "left",
        "markerType": "square",
        "valueText": ""
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": "Обязательства 2014 год"
        }
      ],
      "dataProvider": [
        {
          "category": "Средства банков и иных кредиторов",
          "column-1": "860698"
        },
        {
          "category": "Средства клиентов",
          "column-1": "2863948"
        },
        {
          "category": "Прочие обязательства",
          "column-1": "123240"
        }
      ]
    }
  );

  AmCharts.makeChart("chartdiv1-5",
    {
      "type": "pie",
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "labelRadius": 1,
      "labelText": "[[value]] ",
      "colors": [
        "#3680be",
        "#cdcdcd",
        "#ff1c1c",
      ],
      "titleField": "category",
      "valueField": "column-1",
      "thousandsSeparator": " ",
      "theme": "light",
      "allLabels": [],
      "balloon": {},
      "legend": {
        "enabled": true,
        "align": "left",
        "markerType": "square",
        "valueText": "",
        "maxColumns": 1
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": "Капитал 2015 год"
        }
      ],
      "dataProvider": [
        {
          "category": "Уставный фонд",
          "column-1": "570136"
        },
        {
          "category": "Резервы и фонды",
          "column-1": "383104"
        }
      ]
    }
  );

  AmCharts.makeChart("chartdiv1-6",
    {
      "type": "pie",
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "labelRadius": 1,
      "labelText": "[[value]] ",
      "colors": [
        "#3680be",
        "#cdcdcd",
        "#ff1c1c",
      ],
      "titleField": "category",
      "valueField": "column-1",
      "thousandsSeparator": " ",
      "theme": "light",
      "allLabels": [],
      "balloon": {},
      "legend": {
        "enabled": true,
        "align": "left",
        "markerType": "square",
        "valueText": "",
        "maxColumns": 1
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": "Капитал 2014 год"
        }
      ],
      "dataProvider": [
          {
            "category": "Уставный фонд",
            "column-1": "570136"
          },
          {
            "category": "Резервы и фонды",
            "column-1": "235658"
          }
        ]
    }
  );

  AmCharts.makeChart("chartdiv-bar2",
    {
      "type": "serial",
      "categoryField": "category",
      "rotate": true,
      "startDuration": 1,
      "thousandsSeparator": " ",
      "theme": "light",
      "colors": [
        "#cdcdcd",
        "#3680be",
        "#ff1c1c",
      ],
      "categoryAxis": {
        "gridPosition": "start"
      },
      "trendLines": [],
      "graphs": [
        {
          "balloonText": "[[title]] | [[category]]:[[value]]",
          "fillAlphas": 1,
          "id": "AmGraph-1",
          "labelText": "[[value]]",
          "title": "2015",
          "type": "column",
          "valueField": "column-1"
        },
        {
          "balloonText": "[[title]] | [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-2",
          "labelText": "[[value]]",
          "lineThickness": 2,
          "title": "2014",
          "valueField": "column-2"
        }
      ],
      "guides": [],
      "valueAxes": [
        {
          "id": "ValueAxis-1",
          "title": ""
        }
      ],
      "allLabels": [],
      "balloon": {},
      "legend": {
        "enabled": true,
        "useGraphSettings": true
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": ""
        }
      ],
      "dataProvider": [
        {
          "category": "Процентные доходы",
          "column-1": "1439568",
          "column-2": "1458486"
        },
        {
          "category": "Процентные расходы",
          "column-1": "668114",
          "column-2": "659316"
        },
        {
          "category": "Чистый процентный доход",
          "column-1": "771454",
          "column-2": "799170"
        },
        {
          "category": "Отчисления в резервы",
          "column-1": "387225",
          "column-2": "326269"
        },
        {
          "category": "Чистый комиссионный доход",
          "column-1": "187698",
          "column-2": "228654"
        },
        {
          "category": "Прочие доходы",
          "column-1": "260913",
          "column-2": "134186"
        },
        {
          "category": "Прочие расходы",
          "column-1": "606483",
          "column-2": "481426"
        },
        
        {
          "category": "Убыток от гиперинфляции",
          "column-1": "null",
          "column-2": "83961"
        },
        {
          "category": "Прибыль до налога",
          "column-1": "222093",
          "column-2": "269799"
        },
        {
          "category": "Налог на прибыль",
          "column-1": "43032",
          "column-2": "69323"
        },
        {
          "category": "Прибыль за отчетный год",
          "column-1": "179061",
          "column-2": "200476"
        }
      ]
    }
  );
