const test = require('../../test-framework.js')
const Airport = require('../../src/airport.js')



test.it('be able to land a plane in the airport', () => {
    //arrange
    const plane = {
        name: 'plane1'
    }
    const expectedValue = plane
    // act 
    let airport = new Airport(3)
    airport.land(plane)
    const actualValue = airport.airportList[0]
    //assert
    test.assertEquals(expectedValue, actualValue)

})