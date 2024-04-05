import React from 'react';
import { useAtom } from 'jotai';
import { toast } from 'react-toastify';
import { routerAtom } from '../../atoms/router';
import { OrocaYouTubeMembershipEmotes, OrocaInfo } from '../../../data/oroca';
import { CommentCard, Heading, SubHeading } from '../home';

export const OrocaPage = () => {
  const [route, setRoute] = useAtom(routerAtom);

  return (
    <div>
      <Heading>
        {OrocaInfo.name}
        {OrocaInfo.symbol}
      </Heading>
      <section>
        <SubHeading>YouTube コメント</SubHeading>
        <div className="grid grid-cols-3 gap-3">
          {OrocaYouTubeMembershipEmotes.map((emote) => (
            <CommentCard
              key={emote.id}
              onClick={() => {
                navigator.clipboard.writeText(`:${emote.id}`);
                toast.success('コピーしました');
              }}
            >
              {emote.id}
            </CommentCard>
          ))}
        </div>
      </section>
    </div>
  );
};
