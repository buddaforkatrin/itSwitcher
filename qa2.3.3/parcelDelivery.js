let userBalance = 500;
const parcelLocker = [null, null, null, "1432HGF", null];
const userSmsCode = "A001DFX0";
const BD = [
  {
    id: "1432HGF",
    code: "A001DFX0",
    price: 100,
  },
  {
    id: "1234AAA",
    code: "B325DHH0",
    price: 50,
  },
];

function getMessage(code) {
  const parcel = BD.find((item) => item.code === code);
  const locker = Boolean(parcel) && parcelLocker.indexOf(parcel.id) + 1;

  if (locker) {
    userBalance -= parcel.price;
    console.log(
      `Заберите посылку ${parcel.id} из ячейки ${locker}. Ваш счет составляет: ${userBalance}ед.`
    );

    return;
  }

  console.log(
    "Посылка с данным кодом не найдена. Проверьте правильность введенного кода или обратитесь в нашу техническую поддержку."
  );
}

getMessage(userSmsCode);
