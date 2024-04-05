import React from 'react';
import { useAtom } from 'jotai';
import { toast } from 'react-toastify';
import { routerAtom } from '../../atoms/router';
import { BabynicoYouTubeComments, BabynicoInfo } from '../../../data/babynico';
import { CommentCard, Heading, SubHeading } from '../home';

export const BabynicoPage = () => {
  const [route, setRoute] = useAtom(routerAtom);

  return (
    <div>
      <Heading>
        {BabynicoInfo.name}
        {BabynicoInfo.symbol}
      </Heading>
      <section>
        <SubHeading>YouTube コメント</SubHeading>
        <div className="grid grid-cols-3 gap-3">
          {/* {BabynicoYouTubeComments.map((emote) => (
            <CommentCard
              key={emote.id}
              onClick={() => {
                navigator.clipboard.writeText(`:${emote.id}`);
                toast.success('コピーしました');
              }}
            >
              {emote.id}
            </CommentCard>
          ))} */}
        </div>
      </section>
    </div>
  );
};
