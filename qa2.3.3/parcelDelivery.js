let userBalance = 500;
const userParcelPrice = 100;
const parcelLocker = [null, null, null, "1432HGF", null];
const userSmsCode = "A001DFX0";
const BD = [
  {
    id: userSmsCode,
    code: userSmsCode,
    userParcelPrice,
    locker: parcelLocker.indexOf(userSmsCode),
  },
];

function getMessage(code) {
  if (parcelLocker.indexOf(code) != -1) {
    userBalance -= userParcelPrice;
    console.log(
      `Заберите посылку ${code} из ячейки ${parcelLocker.indexOf(
        code
      )}. Ваш счет составляет: ${userBalance}ед.`
    );
  } else {
    console.log(
      "Посылка с данным кодом не найдена. Проверьте правильность введенного кода или обратитесь в нашу техническую поддержку."
    );
  }
}

getMessage(userSmsCode);
