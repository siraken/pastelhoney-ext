import React, { ReactNode } from 'react';
import { useAtom } from 'jotai';
import { routerAtom } from '../atoms/router';
import { If, Then, Else } from 'react-if';
import { OrocaPage } from './members/oroca';
import { YukimuraPage } from './members/yukimura';
import { SatoNozomiPage } from './members/sato-nozomi';
import { MarinaruPage } from './members/marinaru';
import { BabynicoPage } from './members/babynico';
import { ZepaPage } from './members/zepa';

const Link = ({
  href,
  title,
  onClick,
}: {
  href: string;
  title: string;
  onClick: () => void;
}) => {
  return (
    <li className="">
      <a
        href={href}
        className="block p-3 border rounded hover:bg-slate-100"
        onClick={onClick}
      >
        {title}
      </a>
    </li>
  );
};

export const Heading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`text-xl font-bold mb-3 ${className || ''}`}>{children}</h1>
  );
};

export const SubHeading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={`text-lg font-bold mb-3 ${className || ''}`}>{children}</h2>
  );
};

export const CommentCard = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`p-3 border rounded hover:bg-slate-100 ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const Home = () => {
  const [route, setRoute] = useAtom(routerAtom);

  return (
    <>
      <div className="container p-3">
        <If condition={route === 'home'}>
          <Then>
            <div>
              <Heading>ぱすはにツール</Heading>
              <ul className="grid grid-cols-3 gap-3">
                <Link
                  href="#"
                  title="佐藤希"
                  onClick={() => setRoute('satonozomi')}
                />
                <Link
                  href="#"
                  title="oroca"
                  onClick={() => setRoute('oroca')}
                />
                <Link
                  href="#"
                  title="まりなる"
                  onClick={() => setRoute('marinaru')}
                />
                <Link
                  href="#"
                  title="Babynico"
                  onClick={() => setRoute('babynico')}
                />
                <Link
                  href="#"
                  title="ﾕｷﾑﾗﾁｬﾝ！"
                  onClick={() => setRoute('yukimurachan')}
                />
                <Link href="#" title="ゼパ" onClick={() => setRoute('zepa')} />
              </ul>
            </div>
          </Then>
          <Else>
            <a href="#" onClick={() => setRoute('home')}>
              戻る
            </a>
            <If condition={route === 'satonozomi'}>
              <SatoNozomiPage />
            </If>
            <If condition={route === 'oroca'}>
              <OrocaPage />
            </If>
            <If condition={route === 'marinaru'}>
              <MarinaruPage />
            </If>
            <If condition={route === 'babynico'}>
              <BabynicoPage />
            </If>
            <If condition={route === 'yukimurachan'}>
              <YukimuraPage />
            </If>
            <If condition={route === 'zepa'}>
              <ZepaPage />
            </If>
          </Else>
        </If>
      </div>
    </>
  );
};
