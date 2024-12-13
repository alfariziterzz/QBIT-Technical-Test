type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
  };
  
  const comments: IComment[] = [
    {
      commentId: 1,
      commentContent: 'Hai',
      replies: [
        {
          commentId: 11,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 111,
              commentContent: 'Haai juga hai jugaa',
            },
            {
              commentId: 112,
              commentContent: 'Haai juga hai jugaa',
            },
          ],
        },
        {
          commentId: 12,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 121,
              commentContent: 'Haai juga hai jugaa',
            },
          ],
        },
      ],
    },
    {
      commentId: 2,
      commentContent: 'Halooo',
    },
  ];
  
  function countTotalComments(comments: IComment[]): number {
    let total = 0;
  
    function count(comments: IComment[]): void {
      for (const comment of comments) {
        total++;
        if (comment.replies) {
          count(comment.replies);
        }
      }
    }
  
    count(comments);
    return total;
  }
  
  const totalComments = countTotalComments(comments);
  console.log(`total komentar adalah ${totalComments} komentar`);  