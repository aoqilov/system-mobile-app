const tg = window.Telegram?.WebApp;

export function useTelegram() {
  const user = tg?.initDataUnsafe?.user;

  return {
    tg,
    user,
    colorScheme: tg?.colorScheme ?? "light",
    isReady: !!tg,

    ready: () => tg?.ready(),
    expand: () => tg?.expand(),
    close: () => tg?.close(),

    haptic: tg?.HapticFeedback,
    MainButton: tg?.MainButton,
    BackButton: tg?.BackButton,

    showAlert: (msg: string, cb?: () => void) => tg?.showAlert(msg, cb),
    showConfirm: (msg: string, cb?: (ok: boolean) => void) => tg?.showConfirm(msg, cb),
    openTelegramLink: (url: string) => tg?.openTelegramLink(url),
  };
}
