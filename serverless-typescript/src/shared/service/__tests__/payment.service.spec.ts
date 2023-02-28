describe("paymeent service test suite", () => {
  it("should test 1 + 1", () => {
    //Arrange
    const value1 = 1;
    const value2 = 1;
    const valueExpected = 2;

    //Act
    const value = value1 + value2;

    //Assert
    expect(value).toBe(valueExpected);
  });
});
