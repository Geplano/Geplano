/**
 * TinaCMS Admin Page
 *
 * IMPORTANTE: Para acessar o painel do TinaCMS, você deve usar a CLI:
 *
 * 1. Rode no terminal:
 *    npx tinacms dev -c "npm run dev"
 *
 * 2. Isso vai abrir o servidor do Tina E o Next.js juntos
 *
 * 3. Acesse: http://localhost:4001
 *    (Não é localhost:3002, é 4001 - porta do Tina)
 *
 * Modo Local (desenvolvimento):
 * - Edita arquivos JSON diretamente em src/content/sections/
 * - Não precisa de autenticação
 * - Mudanças aparecem instantaneamente no arquivo JSON
 *
 * Como funciona:
 * 1. Na barra lateral, clique em "Hero Section"
 * 2. Edite os campos (título, descrição, slides, etc)
 * 3. Clique em "Save"
 * 4. O arquivo src/content/sections/hero.json é atualizado
 * 5. Atualize a página principal para ver mudanças
 *
 * Alternativa sem CLI:
 * - Edite diretamente src/content/sections/hero.json
 * - Salve o arquivo
 * - Atualize o navegador
 */
export default function AdminPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-geplano-green to-green-900 text-white p-8">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
        <div className="text-center mb-8">
          <svg
            className="w-24 h-24 mx-auto mb-4 text-geplano-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <h1 className="text-4xl font-bold mb-2">TinaCMS Admin</h1>
          <p className="text-gray-200">Painel de Edição de Conteúdo</p>
        </div>

        <div className="space-y-6">
          <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3 flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Como Acessar o Painel
            </h2>
            <ol className="space-y-3 list-decimal list-inside text-gray-100">
              <li>
                Abra o terminal e rode:
                <code className="block mt-2 bg-black/30 p-3 rounded font-mono text-sm">
                  npx tinacms dev -c &quot;npm run dev&quot;
                </code>
              </li>
              <li>Aguarde o servidor iniciar (pode demorar na primeira vez)</li>
              <li>
                Acesse:{" "}
                <a
                  href="http://localhost:4001"
                  className="text-geplano-gold hover:underline font-mono"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://localhost:4001
                </a>
              </li>
            </ol>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3 flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Editando Conteúdo
            </h2>
            <ul className="space-y-2 text-gray-100">
              <li className="flex items-start">
                <span className="text-geplano-gold mr-2">•</span>
                Na barra lateral, clique em{" "}
                <strong>&quot;Hero Section&quot;</strong>
              </li>
              <li className="flex items-start">
                <span className="text-geplano-gold mr-2">•</span>
                Edite os campos no formulário à direita
              </li>
              <li className="flex items-start">
                <span className="text-geplano-gold mr-2">•</span>
                Veja o preview em tempo real à esquerda
              </li>
              <li className="flex items-start">
                <span className="text-geplano-gold mr-2">•</span>
                Clique em <strong>&quot;Save&quot;</strong> para salvar mudanças
              </li>
              <li className="flex items-start">
                <span className="text-geplano-gold mr-2">•</span>
                Atualize a página inicial para ver as mudanças
              </li>
            </ul>
          </div>

          <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3 flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Alternativa Rápida (Sem GUI)
            </h2>
            <p className="text-gray-100 mb-2">
              Se preferir editar direto no código:
            </p>
            <ol className="space-y-2 list-decimal list-inside text-gray-100">
              <li>
                Abra{" "}
                <code className="bg-black/30 px-2 py-1 rounded">
                  src/content/sections/hero.json
                </code>
              </li>
              <li>Edite os campos diretamente no JSON</li>
              <li>Salve o arquivo</li>
              <li>Atualize o navegador</li>
            </ol>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3">📚 Documentação</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://tina.io/docs/"
                  className="text-geplano-gold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  → Documentação oficial do TinaCMS
                </a>
              </li>
              <li>
                <a
                  href="/TINACMS_GUIDE.md"
                  className="text-geplano-gold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  → Guia de Uso (TINACMS_GUIDE.md)
                </a>
              </li>
              <li>
                <a
                  href="/TINACMS_DEV_GUIDE.md"
                  className="text-geplano-gold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  → Guia para Desenvolvedores (TINACMS_DEV_GUIDE.md)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
