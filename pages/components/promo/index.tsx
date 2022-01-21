import { FC } from 'react'
import {
  ContainerDescriptionPromo,
  ContainerImagePromo,
  ContentContainer,
  SpanPromo,
  TitlePromo,
  WrapperPromo,
  WrapperPromoDescription,
} from './styles'

import { GiBeard } from 'react-icons/gi'

const Promo: FC = () => {
  return (
    <WrapperPromo>
      <ContentContainer>
        <WrapperPromoDescription>
          <ContainerDescriptionPromo>

            <TitlePromo>
              50% off
            </TitlePromo>
            <SpanPromo>
              iqwu eqwp oei qwpo ie poq wi epoq w poei qw poe poq wie po qwipeoiqw po ei qwpoie poqwiepoqwpoie qwpoie
              poqwi
              epoipq owei p oqwi ep oiqa asd a as
            </SpanPromo>

          </ContainerDescriptionPromo>
        </WrapperPromoDescription>
        <ContainerImagePromo>
          <GiBeard size={100} />
        </ContainerImagePromo>
      </ContentContainer>
    </WrapperPromo>
  )
}

export default Promo
