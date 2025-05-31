import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ShareWhisper from "../../ShareWhisper";

export default function ShareWhisperModal() {
  return (
    <Dialog>
      <DialogTrigger>Share a Whisper</DialogTrigger>
      <DialogContent>
        <DialogTitle>{""}</DialogTitle>
        <ShareWhisper />
      </DialogContent>
    </Dialog>
  );
}
