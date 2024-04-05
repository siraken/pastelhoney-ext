import React from 'react';
import { useAtom } from 'jotai';
import { toast } from 'react-toastify';
import { routerAtom } from '../../atoms/router';
import {
  SatoNozomiYouTubeComments,
  SatoNozomiInfo,
} from '../../../data/sato-nozomi';
import { CommentCard, Heading, SubHeading } from '../home';

export const SatoNozomiPage = () => {
  const [route, setRoute] = useAtom(routerAtom);

  return (
    <div>
      <Heading>
        {SatoNozomiInfo.name}
        {SatoNozomiInfo.symbol}
      </Heading>
      <section>
        <SubHeading>YouTube コメント</SubHeading>
        <div className="grid grid-cols-3 gap-3">
          {/* {SatoNozomiYouTubeComments.map((emote) => (
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
