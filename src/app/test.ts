export class Test {
  constructor(
    public posts: [
      {
        id: number,
        title: string
      }
    ],
    public comments: [
      {
        id: number,
        body: string,
        postId: number
      }
    ],
    public profile: {
      name: string;
    }
  ) { };
}
