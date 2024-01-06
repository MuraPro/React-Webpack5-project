"test:ui:ci": "concurrently --kill-others --raw --success first \"npm run storybook\" \"npm run test:ui\" \"deelay\"",
