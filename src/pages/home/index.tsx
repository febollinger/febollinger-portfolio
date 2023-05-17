// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {

  const gihubUrl = `https://github.com/${userData.githubUser}`;

  const downloadUrl = "https://drive.google.com/u/0/uc?id=1wK9UgtPzByEp05ZmYO3FFjWYWb8akYt6&export=download"




  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <Text type="name" color="grey4">Hi, my name is {userData.nameUser}</Text>
            </Flex>
            <Text type="body1" color="grey2">
              I'm a Full Stack developer Jr. living in São Lourenço - MG. I make web applications.
            </Text>
            <Text as="h1" type="heading1" color="grey5">
              Innovation is my{" "}
              <Text as="span" type="heading1" color="brand1">
                passion
              </Text>{" "}
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              {/* <Link to="/files/curriculum-dev-fullstack.pdf" target="_blank" download="Curriculum-Fernanda-Bollinger">
                Download CV
              </Link> */}
              <Button as="a" type="outline" target="_blank" href={downloadUrl}>
                Download CV
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                My projects
              </Text>
              <Text as="p" type="body1" color="grey2">
                Some of my{" "}
                <Text as="span" color="brand5">
                  side projects
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
