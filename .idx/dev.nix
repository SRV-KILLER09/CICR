{ pkgs, ... }: {
   channel = "stable-24.05";
  packages = [
    pkgs.caddy
    pkgs.zip
  ];
  env = {};
  idx = {
    extensions = [
      "google.gemini-cli-vscode-ide-companion"
    ];
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["caddy" "file-server" "--listen" ":$PORT" "--browse"];
          manager = "web";
        };
      };
    };
    workspace = {

      onCreate = {
        
        default.openFiles = [ ".idx/dev.nix" "README.md" ];
      };
        onStart = {
      };
    };
  };
}
