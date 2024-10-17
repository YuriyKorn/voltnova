import { NextResponse } from 'next/server';

import { IInputErrors, IUserData } from '@/data/types';
import { userDataValidation } from '@/utils/ts/validation';

type ResponseBody =
  | {
      message: string;
    }
  | { inputErrors: IInputErrors };

export async function POST(request: Request): Promise<NextResponse<ResponseBody>> {
  const userData: IUserData = await request.json();

  const inputErrors = userDataValidation({ name: userData.name, phone: userData.phone });
  if (inputErrors) {
    return NextResponse.json({ inputErrors: inputErrors }, { status: 422 });
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/${process.env.TELEGRAM_BOT_NAME}:${
        process.env.TELEGRAM_BOT_PASSWORD
      }/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&parse_mode=html&text=${encodeURI(
        `<u><b>Volt-Nova</b></u>\n\n<i>ім'я клієнта</i>: <b>${
          userData.name
        }</b>\n\n<i>телефон клієнта</i>: <b>${userData.phone}</b>\n\n${
          userData.productId
            ? `<i>товар</i>: <b>${userData.productId}</b>`
            : `зв'яжіться зі мною, будь-ласка`
        }`
      )}`
    );

    if (response.status !== 200) {
      return NextResponse.json({ message: 'cant send tg message' }, { status: 503 });
    }
  } catch (error) {
    console.log('error: ', error);
    return NextResponse.json({ message: 'cant send tg message' }, { status: 503 });
  }

  return NextResponse.json({ message: 'success' }, { status: 200 });
}
