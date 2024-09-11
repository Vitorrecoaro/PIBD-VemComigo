import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  /*
  // Acesso
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'cadastro', loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroPageModule) },
  
  // Navegação principal
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'caronasDisponiveis', loadChildren: () => import('./pages/caronas-disponiveis/caronas-disponiveis.module').then(m => m.CaronasDisponiveisPageModule) },
  { path: 'caronaAceita', loadChildren: () => import('./pages/carona-aceita/carona-aceita.module').then(m => m.CaronaAceitaPageModule) },
  
  // Menu inferior
  { path: 'perfil', loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule) },
  { path: 'perfil/cadastrarVeiculo', loadChildren: () => import('./pages/cadastrar-veiculo/cadastrar-veiculo.module').then(m => m.CadastrarVeiculoPageModule) },
  { path: 'perfil/minhasCaronas', loadChildren: () => import('./pages/minhas-caronas/minhas-caronas.module').then(m => m.MinhasCaronasPageModule) },
  { path: 'perfil/conversas', loadChildren: () => import('./pages/conversas/conversas.module').then(m => m.ConversasPageModule) },
  
  { path: 'criarCarona', loadChildren: () => import('./pages/criar-carona/criar-carona.module').then(m => m.CriarCaronaPageModule) },
  { path: 'avaliarCarona', loadChildren: () => import('./pages/avaliar-carona/avaliar-carona.module').then(m => m.AvaliarCaronaPageModule) },
  */
 
  // Redireciona o caminho vazio para a página home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Rota de fallback para 404 (página não encontrada)
  { path: '**', redirectTo: 'home' }
   
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}