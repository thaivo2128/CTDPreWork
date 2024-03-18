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
  showSpinner = () => {
    $('#mainSpinner').show();
  };
  hideSpinner = () => {
    $('#mainSpinner').hide();
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
      $this.showSpinner();
      fetch('https://www.swapi.tech/api/planets?page=1&limit=99999')
        .then((res) => res.json())
        .then((data) => {
          $this.update($planetTable, data.results);
        })
        .catch((err) => console.error(err))
        .finally(() => $this.hideSpinner());
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
      $('#starshipInputStarshipClass').val(data.starship_class);
      $('#starshipInputManufacturer').val(data.manufacturer);
      $('#starshipInputCostInCredits').val(data.cost_in_credits);
      $('#starshipInputLength').val(data.length);
      $('#starshipInputPassengers').val(data.passengers);
      $('#starshipInputCrew').val(data.crew);
      $('#starshipInputMaxAtmospheringSpeed').val(data.max_atmosphering_speed);
      $('#starshipInputHyperdriveRating').val(data.hyperdrive_rating);
      $('#starshipInputMGLT').val(data.MGLT);
      $('#starshipInputCargoCapacity').val(data.cargo_capacity);
      $('#starshipInputConsumables').val(data.consumables);
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
      $this.showSpinner();
      fetch('https://www.swapi.tech/api/starships?page=1&limit=99999')
        .then((res) => res.json())
        .then((data) => {
          $this.update($starshipTable, data.results);
        })
        .catch((err) => console.error(err))
        .finally(() => $this.hideSpinner());
    },
  };
  vehicle = {
    init: () => {
      $vehicle = $this.vehicle;
      $vehicle.setupTable();
      $vehicle.setupMenu();
    },
    setupTable: () => {
      $vehicleTable = new DataTable('#vehicleTable', {
        columns: [
          { title: 'Id', data: 'uid' },
          { title: 'Name', data: 'name' },
        ],
        data: [],
      });

      $vehicleTable.on('click', 'tbody tr', function () {
        let data = $vehicleTable.row(this).data();
        $this.vehicle.clearDialogForm();
        $this.vehicle.showDialogSpinner();
        $this.vehicle.fetchDetail(data.uid);

        $('#vehicleModal').modal('show');
      });
    },
    setupMenu: () => {
      var triggerEl = document.querySelector('#mainMenu a[href="#vehicle"]');
      triggerEl.addEventListener('click', function (_) {
        $this.vehicle.fetch();
      });
    },
    clearDialogForm: () => {
      $('#vehicleForm').trigger('reset');
    },
    showDialogSpinner: () => {
      $('#vehicleDialogSpinner').show();
    },
    hideDialogSpinner: () => {
      $('#vehicleDialogSpinner').hide();
    },
    updateDialogForm: (data) => {
      $('#vehicleInputName').val(data.name);
      $('#vehicleInputVehicleClass').val(data.vehicle_class);
      $('#vehicleInputManufacturer').val(data.manufacturer);
      $('#vehicleInputCostInCredits').val(data.cost_in_credits);
      $('#vehicleInputLength').val(data.length);
      $('#vehicleInputPassengers').val(data.passengers);
      $('#vehicleInputCrew').val(data.crew);
      $('#vehicleInputMaxAtmospheringSpeed').val(data.max_atmosphering_speed);
      $('#vehicleInputCargoCapacity').val(data.cargo_capacity);
      $('#vehicleInputConsumables').val(data.consumables);
      $vehicle.hideDialogSpinner();
    },
    fetchDetail: (id) => {
      fetch(`https://www.swapi.tech/api/vehicles/${id}`)
        .then((res) => res.json())
        .then((data) => {
          $vehicle.updateDialogForm(data.result.properties);
        })
        .catch((err) => {
          console.error(err);
          $vehicle.hideDialogSpinner();
        });
    },
    fetch: () => {
      $this.showSpinner();
      fetch('https://www.swapi.tech/api/vehicles?page=1&limit=99999')
        .then((res) => res.json())
        .then((data) => {
          $this.update($vehicleTable, data.results);
        })
        .catch((err) => console.error(err))
        .finally(() => $this.hideSpinner());
    },
  };
  people = {
    init: () => {
      $people = $this.people;
      $people.setupTable();
      $people.setupMenu();
    },
    setupTable: () => {
      $peopleTable = new DataTable('#peopleTable', {
        columns: [
          { title: 'Id', data: 'uid' },
          { title: 'Name', data: 'name' },
        ],
        data: [],
      });

      $peopleTable.on('click', 'tbody tr', function () {
        let data = $peopleTable.row(this).data();
        $this.people.clearDialogForm();
        $this.people.showDialogSpinner();
        $this.people.fetchDetail(data.uid);

        $('#peopleModal').modal('show');
      });
    },
    setupMenu: () => {
      var triggerEl = document.querySelector('#mainMenu a[href="#people"]');
      triggerEl.addEventListener('click', function (_) {
        $this.people.fetch();
      });
    },
    clearDialogForm: () => {
      $('#peopleForm').trigger('reset');
    },
    showDialogSpinner: () => {
      $('#peopleDialogSpinner').show();
    },
    hideDialogSpinner: () => {
      $('#peopleDialogSpinner').hide();
    },
    updateDialogForm: (data) => {
      $('#peopleInputName').val(data.name);
      $('#peopleInputGender').val(data.gender);
      $('#peopleInputBirthYear').val(data.birth_year);
      $('#peopleInputHeight').val(data.height);
      $('#peopleInputMass').val(data.mass);
      $('#peopleInputHairColor').val(data.hair_color);
      $('#peopleInputSkinColor').val(data.skin_color);
      $('#peopleInputEyeColor').val(data.eye_color);
      $people.hideDialogSpinner();
    },
    fetchDetail: (id) => {
      fetch(`https://www.swapi.tech/api/people/${id}`)
        .then((res) => res.json())
        .then((data) => {
          $people.updateDialogForm(data.result.properties);
        })
        .catch((err) => {
          console.error(err);
          $people.hideDialogSpinner();
        });
    },
    fetch: () => {
      $this.showSpinner();
      fetch('https://www.swapi.tech/api/people?page=1&limit=99999')
        .then((res) => res.json())
        .then((data) => {
          $this.update($peopleTable, data.results);
        })
        .catch((err) => console.error(err))
        .finally(() => $this.hideSpinner());
    },
  };
  return {
    init,
    starship,
    planet,
    vehicle,
  };
})();

App.init();
