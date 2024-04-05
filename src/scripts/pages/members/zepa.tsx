import React from 'react';
import { useAtom } from 'jotai';
import { toast } from 'react-toastify';
import { routerAtom } from '../../atoms/router';
import { ZepaYouTubeComments, ZepaInfo } from '../../../data/zepa';
import { CommentCard, Heading, SubHeading } from '../home';

export const ZepaPage = () => {
  const [route, setRoute] = useAtom(routerAtom);

  return (
    <div>
      <Heading>
        {ZepaInfo.name}
        {ZepaInfo.symbol}
      </Heading>
      <section>
        <SubHeading>YouTube コメント</SubHeading>
        <div className="grid grid-cols-3 gap-3">
          {/* {ZepaYouTubeComments.map((emote) => (
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
