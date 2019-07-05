const assert = require('assert')
const BigNumber = require('bignumber.js')
const ExampleContract = artifacts.require('ExampleContract')


describe('ExampleContract', () => {
    contract('ExampleContract', accounts => {
        let contract

        before('setup contract', async () => {
            contract = await ExampleContract.new()
        })

        it('should setNumber', async () => {
            const numberToSet = new BigNumber(7)
            const preNumber = await contract.someNumber()
            await contract.setNumber(numberToSet)
            const postNumber = await contract.someNumber()

            
            assert.equal(
                preNumber.toString(),
                new BigNumber(0).toString(),
                'someNumber should start uninitialized as 0'
            )

            assert.equal(
                postNumber.toString(),
                numberToSet.toString(),
                'someNumber should match numberToSet'
            )
        })

        it('should addNumbers', async () => {
            const numberToAdd = new BigNumber(7)
      
            const someNumber = await contract.someNumber()
            const addedNumbers = await contract.addNumbers(numberToAdd)
      
            assert.equal(
              someNumber.toString(),
              numberToAdd.toString(),
              'someNumber should have been set'
            )
            assert.equal(
              addedNumbers.toString(),
              someNumber.add(numberToAdd).toString(),
              'addNumbers should add someNumber and numberToAdd'
            )
          })


    })
})