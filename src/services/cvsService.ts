import { Cv } from '@/types/cvs';
import i18n from '@/i18n';

export function sortCvs(cvs: Cv[] | null) {
  return cvs
    ? cvs.sort((a, b) => {
        const actLang = i18n.global.locale.split('-')[0];
        if (getCvLangId(a.name) === actLang) return -1;
        if (getCvLangId(b.name) === actLang) return 1;
        return getCvLangId(a.name).localeCompare(getCvLangId(b.name));
      })
    : [];
}

export function getAltFromCv(cvName: string) {
  return i18n.global.t('resume.flag--alt', {
    language: getCvLangId(cvName),
  });
}

function getCvLangId(cvName: string) {
  return cvName.split('-')[1];
}
