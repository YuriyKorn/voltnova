import { StaticImageData } from 'next/image';

import slideAboutSec_01 from '@/assets/aboutSection/slide_01.webp';
import slideAboutSec_02 from '@/assets/aboutSection/slide_02.webp';
import slideAboutSec_03 from '@/assets/aboutSection/slide_03.webp';
import slideAboutSec_04 from '@/assets/aboutSection/slide_04.webp';
import slideAboutSec_05 from '@/assets/aboutSection/slide_05.webp';

import slideCertR05_01 from '@/assets/certificates/TSZ22100169-P04-R05/img_001.png';
import slideCertR05_02 from '@/assets/certificates/TSZ22100169-P04-R05/img_002.png';
import slideCertR05_03 from '@/assets/certificates/TSZ22100169-P04-R05/img_003.png';
import slideCertR05_04 from '@/assets/certificates/TSZ22100169-P04-R05/img_004.png';
import slideCertR05_05 from '@/assets/certificates/TSZ22100169-P04-R05/img_005.png';

import slideCertR01_01 from '@/assets/certificates/TSZ22100169-P04-R01/im_001.png';
import slideCertR01_02 from '@/assets/certificates/TSZ22100169-P04-R01/im_002.png';
import slideCertR01_03 from '@/assets/certificates/TSZ22100169-P04-R01/im_003.png';
import slideCertR01_04 from '@/assets/certificates/TSZ22100169-P04-R01/im_004.png';
import slideCertR01_05 from '@/assets/certificates/TSZ22100169-P04-R01/im_005.png';
import slideCertR01_06 from '@/assets/certificates/TSZ22100169-P04-R01/im_006.png';
import slideCertR01_07 from '@/assets/certificates/TSZ22100169-P04-R01/im_007.png';
import slideCertR01_08 from '@/assets/certificates/TSZ22100169-P04-R01/im_008.png';
import slideCertR01_09 from '@/assets/certificates/TSZ22100169-P04-R01/im_009.png';
import slideCertR01_10 from '@/assets/certificates/TSZ22100169-P04-R01/im_010.png';
import slideCertR01_11 from '@/assets/certificates/TSZ22100169-P04-R01/im_011.png';
import slideCertR01_12 from '@/assets/certificates/TSZ22100169-P04-R01/im_012.png';
import slideCertR01_13 from '@/assets/certificates/TSZ22100169-P04-R01/im_013.png';
import slideCertR01_14 from '@/assets/certificates/TSZ22100169-P04-R01/im_014.png';
import slideCertR01_15 from '@/assets/certificates/TSZ22100169-P04-R01/im_015.png';
import slideCertR01_16 from '@/assets/certificates/TSZ22100169-P04-R01/im_016.png';

import slideCertR02_01 from '@/assets/certificates/TSZ22100169-P04-R02/img_001.png';
import slideCertR02_02 from '@/assets/certificates/TSZ22100169-P04-R02/img_002.png';
import slideCertR02_03 from '@/assets/certificates/TSZ22100169-P04-R02/img_003.png';
import slideCertR02_04 from '@/assets/certificates/TSZ22100169-P04-R02/img_004.png';
import slideCertR02_05 from '@/assets/certificates/TSZ22100169-P04-R02/img_005.png';
import slideCertR02_06 from '@/assets/certificates/TSZ22100169-P04-R02/img_006.png';
import slideCertR02_07 from '@/assets/certificates/TSZ22100169-P04-R02/img_007.png';
import slideCertR02_08 from '@/assets/certificates/TSZ22100169-P04-R02/img_008.png';
import slideCertR02_09 from '@/assets/certificates/TSZ22100169-P04-R02/img_009.png';
import slideCertR02_10 from '@/assets/certificates/TSZ22100169-P04-R02/img_010.png';
import slideCertR02_11 from '@/assets/certificates/TSZ22100169-P04-R02/img_011.png';

import slideFccReport_01 from '@/assets/certificates/FCC-Report/img_001.png';
import slideFccReport_02 from '@/assets/certificates/FCC-Report/img_002.png';
import slideFccReport_03 from '@/assets/certificates/FCC-Report/img_003.png';
import slideFccReport_04 from '@/assets/certificates/FCC-Report/img_004.png';
import slideFccReport_05 from '@/assets/certificates/FCC-Report/img_005.png';
import slideFccReport_06 from '@/assets/certificates/FCC-Report/img_006.png';
import slideFccReport_07 from '@/assets/certificates/FCC-Report/img_007.png';
import slideFccReport_08 from '@/assets/certificates/FCC-Report/img_008.png';
import slideFccReport_09 from '@/assets/certificates/FCC-Report/img_009.png';
import slideFccReport_10 from '@/assets/certificates/FCC-Report/img_010.png';
import slideFccReport_11 from '@/assets/certificates/FCC-Report/img_011.png';
import slideFccReport_12 from '@/assets/certificates/FCC-Report/img_012.png';
import slideFccReport_13 from '@/assets/certificates/FCC-Report/img_013.png';
import slideFccReport_14 from '@/assets/certificates/FCC-Report/img_014.png';
import slideFccReport_15 from '@/assets/certificates/FCC-Report/img_015.png';
import slideFccReport_16 from '@/assets/certificates/FCC-Report/img_016.png';
import slideFccReport_17 from '@/assets/certificates/FCC-Report/img_017.png';
import slideFccReport_18 from '@/assets/certificates/FCC-Report/img_018.png';
import slideFccReport_19 from '@/assets/certificates/FCC-Report/img_019.png';
import slideFccReport_20 from '@/assets/certificates/FCC-Report/img_020.png';

export type TCarousel = {
  title?: string;
  slides: { img: StaticImageData; alt: string }[];
};

export const carouselAboutSection: TCarousel = {
  slides: [
    { img: slideAboutSec_01, alt: 'img-01' },
    { img: slideAboutSec_02, alt: 'img-02' },
    { img: slideAboutSec_03, alt: 'img-03' },
    { img: slideAboutSec_04, alt: 'img-04' },
    { img: slideAboutSec_05, alt: 'img-05' }
  ]
};

export const carouselCertR05: TCarousel = {
  title: 'Certificates R05',
  slides: [
    { img: slideCertR05_01, alt: 'img-01' },
    { img: slideCertR05_02, alt: 'img-02' },
    { img: slideCertR05_03, alt: 'img-03' },
    { img: slideCertR05_04, alt: 'img-04' },
    { img: slideCertR05_05, alt: 'img-05' }
  ]
};

export const carouselCertR01: TCarousel = {
  title: 'Certificates R01',
  slides: [
    { img: slideCertR01_01, alt: 'img-01' },
    { img: slideCertR01_02, alt: 'img-02' },
    { img: slideCertR01_03, alt: 'img-03' },
    { img: slideCertR01_04, alt: 'img-04' },
    { img: slideCertR01_05, alt: 'img-05' },
    { img: slideCertR01_06, alt: 'img-06' },
    { img: slideCertR01_07, alt: 'img-07' },
    { img: slideCertR01_08, alt: 'img-08' },
    { img: slideCertR01_09, alt: 'img-09' },
    { img: slideCertR01_10, alt: 'img-10' },
    { img: slideCertR01_11, alt: 'img-11' },
    { img: slideCertR01_12, alt: 'img-12' },
    { img: slideCertR01_13, alt: 'img-13' },
    { img: slideCertR01_14, alt: 'img-14' },
    { img: slideCertR01_15, alt: 'img-15' },
    { img: slideCertR01_16, alt: 'img-16' }
  ]
};

export const carouselCertR02: TCarousel = {
  title: 'Certificates R02',
  slides: [
    { img: slideCertR02_01, alt: 'img-01' },
    { img: slideCertR02_02, alt: 'img-02' },
    { img: slideCertR02_03, alt: 'img-03' },
    { img: slideCertR02_04, alt: 'img-04' },
    { img: slideCertR02_05, alt: 'img-05' },
    { img: slideCertR02_06, alt: 'img-06' },
    { img: slideCertR02_07, alt: 'img-07' },
    { img: slideCertR02_08, alt: 'img-08' },
    { img: slideCertR02_09, alt: 'img-09' },
    { img: slideCertR02_10, alt: 'img-10' },
    { img: slideCertR02_11, alt: 'img-11' }
  ]
};

export const carouselFccReport: TCarousel = {
  title: 'Certificates FccReport',
  slides: [
    { img: slideFccReport_01, alt: 'img-01' },
    { img: slideFccReport_02, alt: 'img-02' },
    { img: slideFccReport_03, alt: 'img-03' },
    { img: slideFccReport_04, alt: 'img-04' },
    { img: slideFccReport_05, alt: 'img-05' },
    { img: slideFccReport_06, alt: 'img-06' },
    { img: slideFccReport_07, alt: 'img-07' },
    { img: slideFccReport_08, alt: 'img-08' },
    { img: slideFccReport_09, alt: 'img-09' },
    { img: slideFccReport_10, alt: 'img-10' },
    { img: slideFccReport_11, alt: 'img-11' },
    { img: slideFccReport_12, alt: 'img-12' },
    { img: slideFccReport_13, alt: 'img-13' },
    { img: slideFccReport_14, alt: 'img-14' },
    { img: slideFccReport_15, alt: 'img-15' },
    { img: slideFccReport_16, alt: 'img-16' },
    { img: slideFccReport_17, alt: 'img-17' },
    { img: slideFccReport_18, alt: 'img-18' },
    { img: slideFccReport_19, alt: 'img-19' },
    { img: slideFccReport_20, alt: 'img-20' }
  ]
};
