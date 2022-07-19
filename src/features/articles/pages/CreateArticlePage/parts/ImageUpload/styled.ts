import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const ImgUploadWrapper = styled.div`
  margin-bottom: 4.8rem;
`

export const ImgWrapper = styled.div`
  max-height: 200px;
  max-width: 200px;
  position: relative;
  margin-bottom: 0.8rem;
`

export const HiddenInput = styled.input`
  display: none;
`

export const Separator = styled.span`
  width: 1px;
  border-left: 1px solid ${colors.border.light};
  margin: 0 0.8rem;
`

export const ErrorText = styled.p`
  ${typography.paragraph.verySmall}
  color: ${colors.accent.error};
  margin-top: 3px;
`
