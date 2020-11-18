const { resetCities,
  getCities,
  removeCity,
  retrieveCitiesFromCache,
  requestCities,
  isCity } = require('./cities');

  beforeEach(()=>{
    console.log('before each antes de describe')
  });

  describe('Retrieving cities from cache',() => {
    // Setup => executa função antes de cada testes unitário
    beforeEach(()=> {
      retrieveCitiesFromCache();
    });
    // teardown => executa função Depois de cada teste unitário
    afterEach(()=> {
      resetCities();
    });

    it('should have 2 cities after', () => {
      
      expect(getCities()).toHaveLength(2);
    });

    it('shoul have 1 city after remove Belo Horizonte',() => {
      removeCity('Belo Horizonte');
      expect(getCities()).toHaveLength(1);
    });
  });