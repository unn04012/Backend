export class CreateRoomDto {
  title: string;
  max: number;
  owner: string;
  password: string;
}

export class ChatDto {
  chat: string;
}
