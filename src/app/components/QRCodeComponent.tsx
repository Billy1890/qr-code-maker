import { QRCodeCanvas } from "qrcode.react";

interface QRCodeProps {
  url: string;
  color: string;
}

export default function QRCodeComponent({ url, color }: QRCodeProps) {
  return <QRCodeCanvas value={url} size={200} fgColor={color} />;
}
