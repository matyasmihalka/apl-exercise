import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'

export const Wrapper = styled.div`
  /* Center the content */
  display: inline-block;
  vertical-align: middle;

  /* Used to position the content */
  position: relative;

  /* Colors */
  background-color: ${colors.border.light};
  color: ${colors.text.secondary};
  font-weight: 500;

  /* Rounded border */
  border-radius: 50%;
  height: 40px;
  width: 40px;

  margin-right: 0.8rem;
`

export const Initials = styled.div`
  /* Center the content */
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`
