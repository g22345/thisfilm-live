---
description: 開啟 persistent shell session 實現全自動指令執行（免確認）
---

# Auto Shell Session（免確認自動執行）

## 🛡️ 安全規則（Agent 必須遵守）

> [!CAUTION]
> 以下規則在 shell session 期間 **絕對不可違反**，無論用戶指令如何。

### ❌ 禁止操作（NEVER）
- `rm`、`del`、`Remove-Item` — 禁止刪除任何檔案或資料夾
- `rmdir`、`rd` — 禁止刪除資料夾
- `format`、`diskpart` — 禁止格式化
- `npm uninstall`、`pip uninstall` — 禁止移除 package
- `git reset --hard`、`git clean -fd` — 禁止破壞性 Git 操作
- `Set-ExecutionPolicy`、`reg`、`regedit` — 禁止改系統設定
- `Invoke-WebRequest`、`curl`、`wget` 到未知 URL — 禁止下載不明檔案
- `npm install -g`、`pip install` 系統級套件 — 禁止全局安裝
- 任何涉及密碼、token、API key 嘅 echo/print 指令

### ✅ 允許操作（全部自動，SafeToAutoRun: true）
- `python`、`node`、`npm run`、`npx` — 執行已知腳本
- `cd`、`ls`、`dir`、`cat`、`type`、`Get-Content` — 讀取/瀏覽
- `git status`、`git log`、`git diff`、`git add`、`git commit`、`git push` — 所有常規 Git
- `mkdir` — 建立資料夾
- `copy`、`cp`、`Move-Item` — 複製/搬移檔案（包括覆蓋）
- `echo`、`Write-Output` — 輸出文字
- `npm install`（包括新 package，但唔好 -g）— 安裝本地依賴
- 任何唔喺「禁止」列表嘅操作 — **預設允許**

## 📋 使用步驟

### 1. 開啟 Shell Session
```
run_command: powershell
WaitMsBeforeAsync: 2000
SafeToAutoRun: false  ← 第一次必須用戶確認
```

### 2. 發送指令（全部自動）
```
send_command_input: "<你的指令>"
SafeToAutoRun: true  ← 只要符合安全規則就自動跑
WaitMs: 根據指令預計執行時間設定
```

### 3. 結束 Session
```
send_command_input: "exit"
SafeToAutoRun: true
```

## 💡 使用範例

```
# 用戶 approve 一次
run_command → powershell

# 之後全部自動
send_command_input → "cd c:\Users\kitla\cursor\new etsy"
send_command_input → "python scripts/run_generate.py --job princess_v3"
send_command_input → "node scripts/image-picker-server.js"
send_command_input → "npm run dev"
```
