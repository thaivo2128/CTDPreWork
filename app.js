const App = (() => {
  $this = this;

  init = () => {
    $this.planet.init();
    $this.starship.init();
    $this.vehicle.init();
    $this.people.init();
    $this.planet.fetch();
  };
  update = (table, data) => {
    table.clear();
    table.rows.add(data);
    table.draw();
  };

  planet = {
    init: () => {
      $planet = $this.planet;
      $planet.setupTable();
      $planet.setupMenu();
    },
    setupTable: () => {
      $planetTable = new DataTable('#planetTable', {
        columns: [
          { title: 'Id', data: 'uid' },
          { title: 'Name', data: 'name' },
        ],
        data: [],
      });

      $planetTable.on('click', 'tbody tr', function () {
        let data = $planetTable.row(this).data();
        $this.planet.clearDialogForm();
        $this.planet.showDialogSpinner();
        $this.planet.fetchDetail(data.uid);

        $('#planetModal').modal('show');
      });
    },
    setupMenu: () => {
      var triggerEl = document.querySelector('#mainMenu a[href="#planet"]');
      triggerEl.addEventListener('click', function (_) {
        $this.planet.fetch();
      });
    },
    clearDialogForm: () => {
      $('#planetForm').trigger('reset');
    },
    showDialogSpinner: () => {
      $('#planetDialogSpinner').show();
    },
    hideDialogSpinner: () => {
      $('#planetDialogSpinner').hide();
    },
    updateDialogForm: (data) => {
      $('#planetInputName').val(data.name);
      $('#planetInputDiameter').val(data.diameter);
      $('#planetInputRotationPeriod').val(data.rotation_period);
      $('#planetInputOrbitalPeriod').val(data.orbital_period);
      $('#planetInputGravity').val(data.gravity);
      $('#planetInputPopulation').val(data.population);
      $('#planetInputClimate').val(data.climate);
      $('#planetInputTerrain').val(data.terrain);
      $('#planetInputSurfaceWater').val(data.surface_water);
      $planet.hideDialogSpinner();
    },
    fetchDetail: (id) => {
      fetch(`https://www.swapi.tech/api/planets/${id}`)
        .then((res) => res.json())
        .then((data) => {
          $planet.updateDialogForm(data.result.properties);
        })
        .catch((err) => {
          console.error(err);
          $planet.hideDialogSpinner();
        });
    },
    fetch: () => {
      fetch('https://www.swapi.tech/api/planets?page=1&limit=99999')
        .then((res) => res.json())
        .then((data) => {
          $this.update($planetTable, data.results);
        })
        .catch((err) => console.error(err));
    },
  };
  starship = {
    init: () => {
      $starship = $this.starship;
      $starship.setupTable();
      $starship.setupMenu();
    },
    setupTable: () => {
      $starshipTable = new DataTable('#starshipTable', {
        columns: [
          { title: 'Id', data: 'uid' },
          { title: 'Name', data: 'name' },
        ],
        data: [],
      });

      $starshipTable.on('click', 'tbody tr', function () {
        let data = $starshipTable.row(this).data();
        $this.starship.clearDialogForm();
        $this.starship.showDialogSpinner();
        $this.starship.fetchDetail(data.uid);

        $('#starshipModal').modal('show');
      });
    },
    setupMenu: () => {
      var triggerEl = document.querySelector('#mainMenu a[href="#starship"]');
      triggerEl.addEventListener('click', function (_) {
        $this.starship.fetch();
      });
    },
    clearDialogForm: () => {
      $('#starshipForm').trigger('reset');
    },
    showDialogSpinner: () => {
      $('#starshipDialogSpinner').show();
    },
    hideDialogSpinner: () => {
      $('#starshipDialogSpinner').hide();
    },
    updateDialogForm: (data) => {
      $('#starshipInputName').val(data.name);
      $('#starshipInputDiameter').val(data.diameter);
      $('#starshipInputRotationPeriod').val(data.rotation_period);
      $('#starshipInputOrbitalPeriod').val(data.orbital_period);
      $('#starshipInputGravity').val(data.gravity);
      $('#starshipInputPopulation').val(data.population);
      $('#starshipInputClimate').val(data.climate);
      $('#starshipInputTerrain').val(data.terrain);
      $('#starshipInputSurfaceWater').val(data.surface_water);
      $starship.hideDialogSpinner();
    },
    fetchDetail: (id) => {
      fetch(`https://www.swapi.tech/api/starships/${id}`)
        .then((res) => res.json())
        .then((data) => {
          $starship.updateDialogForm(data.result.properties);
        })
        .catch((err) => {
          console.error(err);
          $starship.hideDialogSpinner();
        });
    },
    fetch: () => {
      fetch('https://www.swapi.tech/api/starships?page=1&limit=99999')
        .then((res) => res.json())
        .then((data) => {
          $this.update($starshipTable, data.results);
        })
        .catch((err) => console.error(err));
    },
  };

  vehicle = {
    init: () => {
      $this.vehicle.table = new DataTable('#vehicleTable', {
        columns: [
          { title: 'Id', data: 'uid' },
          { title: 'Name', data: 'name' },
        ],
        data: [],
      });
      var triggerEl = document.querySelector('#mainMenu a[href="#vehicle"]');
      triggerEl.addEventListener('click', function (event) {
        $this.vehicle.fetch();
      });
    },
    fetch: () => {
      fetch('https://www.swapi.tech/api/vehicles?page=1&limit=99999')
        .then((res) => res.json())
        .then((data) => {
          $this.update($this.vehicle.table, data.results);
        })
        .catch((err) => console.error(err));
    },
  };
  people = {
    init: () => {
      $this.people.table = new DataTable('#peopleTable', {
        columns: [
          { title: 'Id', data: 'uid' },
          { title: 'Name', data: 'name' },
        ],
        data: [],
      });
      var triggerEl = document.querySelector('#mainMenu a[href="#people"]');
      triggerEl.addEventListener('click', function (event) {
        $this.people.fetch();
      });
    },
    fetch: () => {
      fetch('https://www.swapi.tech/api/people?page=1&limit=99999')
        .then((res) => res.json())
        .then((data) => {
          $this.update($this.people.table, data.results);
        })
        .catch((err) => console.error(err));
    },
  };
  return {
    init,
    starship,
    planet,
  };
})();

App.init();
