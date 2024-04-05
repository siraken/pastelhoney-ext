import React from 'react';
import { useAtom } from 'jotai';
import { toast } from 'react-toastify';
import { routerAtom } from '../../atoms/router';
import { MarinaruYouTubeComments, MarinaruInfo } from '../../../data/marinaru';
import { CommentCard, Heading, SubHeading } from '../home';

export const MarinaruPage = () => {
  const [route, setRoute] = useAtom(routerAtom);

  return (
    <div>
      <Heading>
        {MarinaruInfo.name}
        {MarinaruInfo.symbol}
      </Heading>
      <section>
        <SubHeading>YouTube コメント</SubHeading>
        <div className="grid grid-cols-3 gap-3">
          {/* {MarinaruYouTubeComments.map((emote) => (
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
