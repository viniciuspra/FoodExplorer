import QRCode from "qrcode.react";

import { Container } from "./styles";

export function QRCodeDisplay() {
  const QRCodeData = "https://github.com/Viniciuspra";

  return (
    <Container>
      <QRCode value={QRCodeData} size={200} />
    </Container>
  );
}
