import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'Just a test' },
    { type: 'server', name: 'gamer', content: 'get rekt' },
  ];

  onServerAdded(serverData: {serverName:string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent,
    });
  }

  onchangeFirstElement() {
    this.serverElements[0].name = 'changed';
  }

  onDestroyFirstElement () {
    this.serverElements.splice(0,1)
  }
}
