import React from "react";
import { IconUser } from "@dmitrygrigorov/icons";
import { Avatar } from "../../../../../components/Avatar";
import H from "../../../../../components/typography/H";
import P2 from "../../../../typography/P2";
import { MainContentStyled, MessageStyled } from "./styles";

const MESSAGES = [
  {
    user: "Maxim Ivanov",
    message: "Hi! If you're in the office tomorrow, turn it on..."
  },
  {
    user: "Anna Nikitina",
    message: "Missed stand-up again? :)"
  },
  {
    user: "Anton Sergeev",
    message: "I'm feeling unwell, so I'll rest today, okay?"
  },
  {
    user: "Vepsarvar Varses",
    message: "So how is one different from the other? I..."
  },
  {
    user: "Andrey Vasiliev",
    message: "Are you coming to the conference tomorrow? You're speaking :)"
  }
];

const MainContent: React.FC = () => (
  <MainContentStyled>
    {MESSAGES.map((message) => (
      <MessageStyled key={message.user}>
        <div className="user-message">
          <Avatar size="m" icon={<IconUser />} />
          <H type="capricornus">{message.user}</H>
        </div>
        <P2 type="corvus">{message.message}</P2>
      </MessageStyled>
    ))}
  </MainContentStyled>
);

export default MainContent;
