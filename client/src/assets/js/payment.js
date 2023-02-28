var yoco = new window.YocoSDK({
  publicKey: "pk_test_ed3c54a6gOol69qa7f45",
});
function myFunction(amount) {
  yoco.showPopup({
    amountInCents: amount,
    currency: "ZAR",
    name: "MH Express",
    description: "Awesome description",
    callback: function (result) {
      if (result.error) {
        const errorMessage = result.error.message;
        alert("error occured: " + errorMessage);
      } else {
        window.angularComponentReference.zone.run(() => {
          window.angularComponentReference.loadAngularFunction(result.id);
        });
      }
    },
  });
}
