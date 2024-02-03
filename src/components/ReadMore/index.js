// Write your code here
import {useState} from 'react'

import {
  Container,
  ReadMoreContainer,
  ReactHooksHeading,
  ReactHooksDescription,
  ReactHooksImage,
  ReadMoreParagraph,
  ReadMoreButton,
} from './styledComponents'

const ReadMore = () => {
  const [buttonClicked, onChangeParagraphData] = useState(false)

  const paragraph =
    'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.'

  const shortIndex = 170
  const fullIndex = paragraph.length

  const description = buttonClicked
    ? paragraph.slice(0, fullIndex)
    : paragraph.slice(0, shortIndex)

  const onChangeParagraph = () => onChangeParagraphData(prevState => !prevState)

  const buttonText = buttonClicked ? 'Read Less' : 'Read More'

  return (
    <Container>
      <ReadMoreContainer>
        <ReactHooksHeading>React Hooks</ReactHooksHeading>
        <ReactHooksDescription>
          Hooks are a new addition to React
        </ReactHooksDescription>
        <ReactHooksImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <ReadMoreParagraph>{description}</ReadMoreParagraph>
        <ReadMoreButton type="button" onClick={onChangeParagraph}>
          {buttonText}
        </ReadMoreButton>
      </ReadMoreContainer>
    </Container>
  )
}

export default ReadMore
