import { IContact } from '../View/contact';

export function sleep(ms: number) {
  return new Promise<IContact[]>((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            first: 'Your',
            last: 'Name',
            avatar: 'https://placekitten.com/g/200/200',
            twitter: 'your_handle',
            notes: 'Some notes',
            favorite: true
          }
        ]),
      ms
    )
  );
}
