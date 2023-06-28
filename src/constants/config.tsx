import {Icon} from 'react-native-eva-icons';
import React from 'react';
import images from './images';

const CATEGORIES = [
  {
    id: 'cfe1917f-9df3-4db0-8555-fbfe7e28c353',
    name: 'Helsa',
    icon: <Icon name="cube" width={38} height={38} fill={'white'} />,
  },
  {
    id: '9d08a16e-e9fc-4f6a-bee9-a18937a57612',
    name: 'Marjory',
    icon: <Icon name="email" width={38} height={38} fill={'white'} />,
  },
  {
    id: 'a26cc474-5acc-4802-ad97-238359b3b9f4',
    name: 'Pacorro',
    icon: <Icon name="facebook" width={38} height={38} fill={'white'} />,
  },
  {
    id: '9d8c3355-a7ab-417c-a593-766bc9a6dc12',
    name: 'Burnaby',
    icon: <Icon name="droplet" width={38} height={38} fill={'white'} />,
  },
  {
    id: 'ac6398ed-0a3f-43d1-8109-a07e9831b0fb',
    name: 'Shannah',
    icon: <Icon name="image-2" width={38} height={38} fill={'white'} />,
  },
  {
    id: '27fd4e9e-8386-469c-83b5-734df698f4f7',
    name: 'Morly',
    icon: <Icon name="layout" width={38} height={38} fill={'white'} />,
  },
];

const TOURS = [
  {
    id: 'c1ae0cca-4ed2-4211-83b9-1029057dae0f',
    name: 'Susanna',
    bgImage: images.plant1,
    distance: 76,
  },
  {
    id: '28ed79e5-a1ea-4670-a791-fe043d8c9a25',
    name: 'Alanna',
    bgImage: images.plant3,
    distance: 99,
  },
  {
    id: 'b6aee582-d77d-4763-bacc-79fb857ab21d',
    name: 'Mile',
    bgImage: images.plant4,
    distance: 20,
  },
  {
    id: '43d3e971-0244-4a9a-8085-e0e58b213531',
    name: 'Camila',
    bgImage: images.plant5,
    distance: 5,
  },
  {
    id: '0fc9de42-9d37-487d-ad54-1ab7060b2268',
    name: 'Gipsy',
    bgImage: images.plant6,
    distance: 30,
  },
  {
    id: '8d706abe-9a05-4d1a-8121-7488d0fbde02',
    name: 'Rozella',
    bgImage: images.plant7,
    distance: 65,
  },
];

const DATA = [
  {
    title: 'Categories',
    id: '8ea6f3f8-2837-47c8-89a3-ed7b1b7ef5e7',
    data: CATEGORIES,
  },
  {
    title: 'Tours',
    id: '55e4a5d6-65ee-41d0-a5d9-2cc0ad0ce45b',
    data: TOURS,
  },
];

const FACILITIES = [
  {
    id: '920dece7-f3f7-4e13-98f2-8871e2c155c4',
    name: 'lsperrett0',
  },
  {
    id: '5669fc99-95ce-4db3-8785-153838fe307b',
    name: 'ablackstock1',
  },
  {
    id: '2d4981e4-e393-41fb-b1a4-d03507034769',
    name: 'tglenn2',
  },
  {
    id: '123fc03b-2a29-4043-be07-7968a9ddeb80',
    name: 'rroggers3',
  },
  {
    id: '5ef66e17-f322-428a-8e22-e4318d5639ab',
    name: 'sdicarli4',
  },
  {
    id: '2a545f23-1446-4583-a676-4bf700bebcd7',
    name: 'ahartman5',
  },
  {
    id: '13da47ff-9c4e-47cd-ad94-677c71d91dfb',
    name: 'nharkes6',
  },
  {
    id: 'a3f4127d-8ac8-485f-90d2-bcc9b6ef6a31',
    name: 'gfeckey7',
  },
];

export {DATA, FACILITIES};
