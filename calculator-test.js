
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 15000,
    years: 10, 
    rate: 5.5,

  };
  expect(calculateMonthlyPayment(values)).toEqual('162.79');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8,
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');

});

/// etc
