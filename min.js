    const targetTimeZones = [
      "Asia/Jakarta",    // Indonesia - Jakarta
      "Asia/Makassar",   // Indonesia - Makassar
      "Asia/Jayapura",   // Indonesia - Jayapura
      "Asia/Phnom_Penh"
    ];

    if (targetTimeZones.includes(userTimeZone)) {
      console.error("Game load error: missing assets");
    }
