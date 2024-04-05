import React from 'react';
import { useAtom } from 'jotai';
import { routerAtom } from '../../atoms/router';
import { CommentCard, Heading, SubHeading } from '../home';
import { toast } from 'react-toastify';
import { YukimuraYouTubeComments, YukimuraInfo } from '../../../data/yukimura';

export const YukimuraPage = () => {
  const [route, setRoute] = useAtom(routerAtom);

  return (
    <div>
      <Heading>
        {YukimuraInfo.name}
        {YukimuraInfo.symbol}
      </Heading>
      <section>
        <SubHeading>YouTube コメント</SubHeading>
        <div className="grid grid-cols-3 gap-3">
          {YukimuraYouTubeComments.map((comment) => (
            <CommentCard
              key={comment.id}
              onClick={() => {
                navigator.clipboard.writeText(comment.text);
                toast.success('コピーしました');
              }}
            >
              {comment.text}
            </CommentCard>
          ))}
        </div>
      </section>
    </div>
  );
};
