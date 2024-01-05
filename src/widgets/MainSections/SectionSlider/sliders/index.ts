import { type ISlide } from '../types';

import Slide_1 from '../images/slide-01.png';
import Slide_2 from '../images/slide-02.png';
import Slide_3 from '../images/slide-03.png';
import Slide_4 from '../images/slide-04.png';
import Slide_5 from '../images/slide-05.png';

export const SLIDERS: ISlide[] = [
  {
    key: 'SolleVital',
    title: {
      text: 'Solle',
      strong: 'Vital®',
    },
    subtitle: 'subtitle',
    imageUrl: Slide_1,
    items: [
      {
        title: 'detoxing',
        text: 'detoxing_text',
      },
      {
        title: 'mood',
        text: 'mood_text',
      },
      {
        title: 'stamina',
        text: 'stamina_text',
      },
      {
        title: 'athletic',
        text: 'athletic_text',
      },
      {
        title: 'alkalizing',
        text: 'alkalizing_text',
      },
    ],
  },

  {
    key: 'SolleReNue',
    title: {
      text: 'Solle',
      strong: 'ReNue®',
    },
    subtitle: 'subtitle',
    imageUrl: Slide_2,
    items: [
      {
        title: 'stressRelief',
        text: 'stressRelief_text',
      },
      {
        title: 'naturalSleepSupport',
        text: 'naturalSleepSupport_text',
      },
      {
        title: 'recovery',
        text: 'recovery_text',
      },
      {
        title: 'liverHealth',
        text: 'liverHealth_text',
      },
      {
        title: 'calmFocus',
        text: 'calmFocus_text',
      },
    ],
  },

  {
    key: 'SolleExcell',
    title: {
      text: 'Solle',
      strong: 'Excell®',
    },
    subtitle: 'subtitle',
    imageUrl: Slide_3,
    items: [
      {
        title: 'libidoEndocrineSupport',
        text: 'libidoEndocrineSupport_text',
      },
      {
        title: 'enhancedAlertness',
        text: 'enhancedAlertness_text',
      },
      {
        title: 'stressSupport',
        text: 'stressSupport_text',
      },
      {
        title: 'healthyBones',
        text: 'healthyBones_text',
      },
      {
        title: 'respiratoryCirculatorySupport',
        text: 'respiratoryCirculatorySupport_text',
      },
      {
        title: 'immuneHealth',
        text: 'immuneHealth_text',
      },
    ],
  },

  {
    key: 'CinnaMate',
    title: {
      text: 'Cinna',
      strong: 'Mâte®',
    },
    subtitle: 'subtitle',
    imageUrl: Slide_4,
    items: [
      {
        title: 'bloodSugar',
        text: 'bloodSugar_text',
      },
      {
        title: 'cravingControl',
        text: 'cravingControl_text',
      },
      {
        title: 'cleanEnergy',
        text: 'cleanEnergy_text',
      },
      {
        title: 'gutHealth',
        text: 'gutHealth_text',
      },
      {
        title: 'immuneHealth',
        text: 'immuneHealth_text',
      },
      {
        title: 'mentalFocus',
        text: 'mentalFocus_text',
      },
    ],
  },

  {
    key: 'SolleRoyal',
    title: {
      text: 'Solle',
      strong: 'Royal®',
    },
    subtitle: 'subtitle',
    imageUrl: Slide_5,
    items: [
      {
        title: 'hairSkinNails',
        text: 'hairSkinNails_text',
      },
      {
        title: 'bonesConnectiveTissues',
        text: 'bonesConnectiveTissues_text',
      },
      {
        title: 'stressSupport',
        text: 'stressSupport_text',
      },
      {
        title: 'immunity',
        text: 'immunity_text',
      },
      {
        title: 'weightManagement',
        text: 'weightManagement_text',
      },
    ],
  },
];
