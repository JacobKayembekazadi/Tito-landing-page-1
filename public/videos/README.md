# Videos Folder

Place your video files here (.mp4, .webm, etc.)

## Usage in your React components:

### For self-hosted video (instead of YouTube):

```tsx
<video 
  className="absolute inset-0 w-full h-full"
  src="/videos/demo.mp4"
  poster="/images/video-thumbnail.jpg"
  controls
  playsInline
/>
```

### Current YouTube embed location:
Replace `VIDEO_ID` in `src/pages/BettingInnerCircleLanding.tsx` around line 260:

```tsx
src="https://www.youtube.com/embed/YOUR_ACTUAL_VIDEO_ID?rel=0&modestbranding=1&playsinline=1"
```

## Recommended video:

- `demo.mp4` - 2-minute walkthrough of your platform (H.264/AAC, 1080p recommended)

