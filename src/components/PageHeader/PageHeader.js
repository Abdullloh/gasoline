import React from 'react'
import { useTranslation } from "react-i18next";
import { StyledPageHeader } from './PageHeader.style'

function PageHeader({title}) {
  const {t} = useTranslation()
  return (
    <StyledPageHeader>
      <h2>
         {t("p0")}
      </h2>
    </StyledPageHeader>
  )
}

export default PageHeader
