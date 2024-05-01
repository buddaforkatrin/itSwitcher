let userBalance = 500;
const parcelLocker = [null, null, null, "1432HGF", null];
const userSmsCode = "A001DFX0";
const BD = [
  {
    id: 13214,
    code: userSmsCode,
    price: 100,
    locker: parcelLocker.indexOf(userSmsCode),
  },
];

function getMessage(code) {
  const parcelIndex = parcelLocker.indexOf(code);
  if (parcelIndex != -1) {
    const parcel = BD.find((item) => item.code === code);
    userBalance -= parcel.price;
    console.log(
      `Заберите посылку ${code} из ячейки ${parcelIndex}. Ваш счет составляет: ${userBalance}ед.`
    );
  } else {
    console.log(
      "Посылка с данным кодом не найдена. Проверьте правильность введенного кода или обратитесь в нашу техническую поддержку."
    );
  }
}

getMessage(userSmsCode);
